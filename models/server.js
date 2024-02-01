const express = require('express');
const cors = require('cors');
const http = require('http');
require('dotenv').config;
const { Server: socketIOServer } = require('socket.io');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT ?? 3030;
    this.server = http.createServer(this.app);
    this.io = socketIOServer(this.server);

    // Middlewares
    this.middleware();
  }
  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }
  socket() {
    this.io.on('connection', socketController);
  }
  listen() {
    this.server.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}!`);
    });
  }
}

module.exports = Server;
