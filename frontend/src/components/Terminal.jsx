import { useState, useRef } from "react";

function Terminal() {
    const [host, setHost] = useState("192.168.1.1");
    const [port, setPort] = useState("22");
    const [username, setUsername] = useState("root");
    const [password, setPassword] = useState("");
    const [connected, setConnected] = useState(false);
    const [output, setOutput] = useState([]);
    const [command, setCommand] = useState("");
    const ws = useRef(null);

    const connectSSH = () => {
        ws.current = new WebSocket("ws://localhost:5000");
        ws.current.onopen = () => {
            ws.current.send(JSON.stringify({ type: "connect", host, port, username, password }));
            setConnected(true);
        };

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === "output") {
                setOutput((prev) => [...prev, data.data]);
            } else if (data.type === "error") {
                setOutput((prev) => [...prev, "Error: " + data.data]);
                setConnected(false);
            }
        };

        ws.current.onclose = () => setConnected(false);
    };

    const sendCommand = (e) => {
        e.preventDefault();
        if (ws.current && command.trim() !== "") {
            ws.current.send(JSON.stringify({ type: "command", data: command }));
            setOutput((prev) => [...prev, `> ${command}`]);
            setCommand("");
        }
    };

    return (
        <div className="p-4 bg-gray-900 text-white h-screen">
            <h1 className="text-lg font-bold">SSH Terminal</h1>
            {!connected ? (
                <div className="mb-4">
                    <input className="border p-2 mr-2" placeholder="Host" value={host} onChange={(e) => setHost(e.target.value)} />
                    <input className="border p-2 mr-2" placeholder="Port" value={port} onChange={(e) => setPort(e.target.value)} />
                    <input className="border p-2 mr-2" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className="border p-2 mr-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="bg-green-500 px-4 py-2" onClick={connectSSH}>Connect</button>
                </div>
            ) : (
                <div>
                    <div className="bg-black p-2 h-80 overflow-auto">
                        {output.map((line, index) => (
                            <pre key={index} className="text-green-400">{line}</pre>
                        ))}
                    </div>
                    <form onSubmit={sendCommand} className="flex mt-2">
                        <input className="border p-2 flex-grow bg-gray-800 text-white" value={command} onChange={(e) => setCommand(e.target.value)} />
                        <button className="bg-blue-500 px-4 py-2">Send</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Terminal;
