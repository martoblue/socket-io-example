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
  start() {
    this.io.on('connection', socketController);
    /*
    (socket) => {
      console.log('a user connected');
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    }
    */
    this.server.listen(port, () => console.log(`Server listening on port ${port}!`));
  }
  stop() {
    this.server.close();
  }
}
