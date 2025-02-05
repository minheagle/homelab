import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

function TerminalComponent({ sshInfo }) {
    const terminalRef = useRef(null);
    const fitAddon = useRef(new FitAddon()); // Addon giúp terminal fit với container
    const ws = useRef(null);

    useEffect(() => {
        const term = new Terminal({
            cursorBlink: true,
            fontSize: 14,
            theme: {
                background: "#1e1e1e",  // Màu nền (dark mode)
                foreground: "#33ff00",  // Màu chữ (trắng)
                cursor: "#fffff",      // Màu con trỏ (xanh lá)
                black: "#000000",
                red: "#ff0000",
                green: "#33ff00",
                yellow: "#ffff00",
                blue: "#0066ff",
                magenta: "#cc00ff",
                cyan: "#00ffff",
                white: "#d0d0d0",
                brightBlack: "#808080",
                brightRed: "#ff3333",
                brightGreen: "#99ff99",
                brightYellow: "#ffff99",
                brightBlue: "#99ccff",
                brightMagenta: "#ff99ff",
                brightCyan: "#99ffff",
                brightWhite: "#ffffff"
            }
        });        

        term.loadAddon(fitAddon.current); // Load addon vào terminal
        term.open(terminalRef.current);
        fitAddon.current.fit(); // Tự động điều chỉnh kích thước khi mở

        // Resize terminal khi window thay đổi kích thước
        const handleResize = () => fitAddon.current.fit();
        window.addEventListener("resize", handleResize);

        ws.current = new WebSocket("ws://localhost:5000");

        ws.current.onopen = () => {
            ws.current.send(JSON.stringify({ type: "login", data: sshInfo }));
        };

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === "output") {
                term.write(data.data);
            } else if (data.type === "error") {
                term.writeln(`\r\n[Error] ${data.data}`);
            }
        };

        term.onData((input) => {
            ws.current.send(JSON.stringify({ type: "command", data: input }));
        });

        return () => {
            window.removeEventListener("resize", handleResize);
            ws.current.close();
            term.dispose();
        };
    }, [sshInfo]);

    return (
        <div className="flex h-screen w-full">
            <div ref={terminalRef} className="w-full h-full bg-black" />
        </div>
    );
}

export default TerminalComponent;
