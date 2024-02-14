import express from "express";
import { Server as WebSocketServer } from "socket.io";
import "dotenv/config.js";
import http from "http";

import Sockets from "./sockets.js";

const api_Key = process.env.API_KEY || null;
const api_Url = "https://api-test.envia.com/";

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

const httpServer = server.listen(port, () => {
  console.log(`Server initialized in port: ${port}`);
});

const io = new WebSocketServer(httpServer);
Sockets(io, api_Key, api_Url);
