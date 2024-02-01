const socketController = (socket) => {
  console.log(`Client: ${socket.id} connected`);
  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id} razón: ${reason}`);
  });

  socket.on('Send message', (payload, callback) => {
    const id = 737174;
    callback(id);
    socket.broadcast.emit('Send message', payload);
  });
};

module.exports = { socketController };
