const socketController = (socket) => {
  console.log(`Client: ${socket.id} connected`);

  socket.on('disconnect', (reason) => {
    console.log(`Client disconnected: ${socket.id} reason: ${reason}`);
  });

  socket.on('send-message', (payload, callback) => {
    const id = 737174;
    callback(id);

    socket.broadcast.emit('send-message', payload);
  });
};

module.exports = socketController;
