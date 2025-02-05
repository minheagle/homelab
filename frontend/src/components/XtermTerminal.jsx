import { useEffect, useRef, useState } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

const XtermTerminal = () => {
  const terminalRef = useRef(null);
    const ws = useRef(null);
    const fitAddon = useRef(new FitAddon());
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        const term = new Terminal({
            cursorBlink: true,
            fontSize: 14,
            theme: { background: "#1E1E1E", foreground: "#C0C0C0" },
        });

        term.loadAddon(fitAddon.current);
        term.open(terminalRef.current);
        fitAddon.current.fit();

        term.writeln("Welcome to SSH Terminal");
        term.write("$ ");

        ws.current = new WebSocket("ws://localhost:5000");

        ws.current.onopen = () => {
            // term.writeln("\r\n[Connected to SSH]");
            setConnected(true);
        };

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === "output") {
                term.write(data.data);
            } else if (data.type === "error") {
                term.writeln(`\r\n[Error] ${data.data}`);
                setConnected(false);
            }
        };

        ws.current.onclose = () => {
            term.writeln("\r\n[Disconnected]");
            setConnected(false);
        };

        term.onData((input) => {
            ws.current.send(JSON.stringify({ type: "command", data: input }));
        });

        return () => {
            ws.current.close();
            term.dispose();
        };
    }, []);

    return <div ref={terminalRef} className="h-screen w-full bg-black" />;
};

export default XtermTerminal;