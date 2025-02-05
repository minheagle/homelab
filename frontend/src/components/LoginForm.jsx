import { useState } from "react";
import TerminalComponent from "./TerminalComponent";

function LoginForm() {
    const [host, setHost] = useState("");
    const [port, setPort] = useState("22");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const [sshInfo, setSshInfo] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSshInfo({ host, port, username, password });
        setIsConnected(true);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {!isConnected ? (
                <form onSubmit={handleSubmit} className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">SSH Login</h2>
                    <label>Host:</label>
                    <input value={host} onChange={(e) => setHost(e.target.value)} className="block w-full p-2 bg-gray-700 border border-gray-600 rounded mb-2" required />

                    <label>Port:</label>
                    <input value={port} onChange={(e) => setPort(e.target.value)} className="block w-full p-2 bg-gray-700 border border-gray-600 rounded mb-2" required />

                    <label>Username:</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="block w-full p-2 bg-gray-700 border border-gray-600 rounded mb-2" required />

                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full p-2 bg-gray-700 border border-gray-600 rounded mb-2" required />

                    <button type="submit" className="w-full bg-green-500 hover:bg-green-600 p-2 rounded mt-2">Connect</button>
                </form>
            ) : (
                <TerminalComponent sshInfo={sshInfo} />
            )}
        </div>
    );
}

export default LoginForm;
