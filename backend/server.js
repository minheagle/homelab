const WebSocket = require("ws");
const { Client } = require("ssh2");

const wss = new WebSocket.Server({ port: 5000 });

wss.on("connection", (ws) => {
    let conn = new Client();

    ws.on("message", (msg) => {
        const data = JSON.parse(msg);

        if (data.type === "login") {
            conn = new Client();
            conn.on("ready", () => {
                ws.send(JSON.stringify({ type: "output", data: "\r\n[Connected to SSH]\r\n" }));
                conn.shell((err, stream) => {
                    if (err) return ws.send(JSON.stringify({ type: "error", data: err.message }));

                    stream.on("data", (data) => {
                        ws.send(JSON.stringify({ type: "output", data: data.toString("utf-8") }));
                    });

                    ws.on("message", (msg) => {
                        const cmdData = JSON.parse(msg);
                        if (cmdData.type === "command") {
                            stream.write(cmdData.data);
                        }
                    });

                    ws.on("close", () => {
                        conn.end();
                    });
                });
            });

            conn.on("error", (err) => {
                ws.send(JSON.stringify({ type: "error", data: err.message }));
            });

            conn.connect({
                host: data.data.host,
                port: parseInt(data.data.port),
                username: data.data.username,
                password: data.data.password,
            });
        }
    });

    ws.on("close", () => {
        conn.end();
    });
});

console.log("WebSocket server running on ws://localhost:5000");
