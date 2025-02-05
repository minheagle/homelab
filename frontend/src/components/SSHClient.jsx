import { useState } from "react";
import axios from "axios";

function SSHClient() {
    const [host, setHost] = useState("");
    const [port, setPort] = useState("22");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [command, setCommand] = useState("");
    const [output, setOutput] = useState("");

    const handleConnect = async () => {
        try {
            const response = await axios.post("http://localhost:5000/ssh", {
                host,
                port,
                username,
                password,
                command,
            });
            setOutput(response.data.output);
        } catch (error) {
            setOutput("Lỗi: " + error.message);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">SSH Client</h2>
            <input className="border p-2 mr-2" placeholder="Host" value={host} onChange={(e) => setHost(e.target.value)} />
            <input className="border p-2 mr-2" placeholder="Port" value={port} onChange={(e) => setPort(e.target.value)} />
            <input className="border p-2 mr-2" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input className="border p-2 mr-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input className="border p-2 mr-2 w-full" placeholder="Command" value={command} onChange={(e) => setCommand(e.target.value)} />
            <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={handleConnect}>Execute</button>
            <pre className="bg-gray-200 p-4 mt-4">{output}</pre>
        </div>
    );
}

export default SSHClient;
