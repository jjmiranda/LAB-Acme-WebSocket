import socket from "socket.io";
import dotenv from 'dotenv';
import logger from "./logger";

dotenv.config();
const port = +(process.env.PORT || "5001");

class App {

    public io: socket.Server;

    constructor() {
        this.io = new socket.Server(port, {cors: { origin: '*'}});
        this.pipes();
    }

    private pipes(): void { 
        logger.info(`Server is running at https://localhost:${port}`);
        this.io.on("connection", (socket) => {
            socket.on("shared-identity", (args) => {
                socket.to(args.to).emit('shared-identity-client', args.content);
            });
            socket.on("shared-credential", (args) => {
                socket.to(args.to).emit('shared-credential-client', args.content);
            });
            socket.on("access-history", (args) => {
                socket.broadcast.emit('access-history-client', args.content);
            });
        });
    }
}

export default new App().io;