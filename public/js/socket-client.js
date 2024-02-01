const statusOnline = document.querySelector('#statusOnline');
const statusOffline = document.querySelector('#statusOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

const socket = io();

socket.on('connect', () => {
  console.log('Connected...');
  statusOnline.style.display = 'block';
  statusOffline.style.display = 'none';
});

socket.on('disconnect', () => {
  console.log('Disconnected...');
  statusOnline.style.display = 'none';
  statusOffline.style.display = 'block';
});

socket.on('send-message', (payload) => {
  console.log(payload);
});

btnSend.addEventListener('click', () => {
  const message = txtMessage.value;
  const payload = {
    id: '453411',
    message: message,
    date: new Date().getTime(),
  };
  socket.emit('send-message', payload, (id) => {
    console.log('From the server, received: ', id);
  });
});
