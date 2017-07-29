function initSocket(io) {
  let chat = io.of('/chat');

  chat.on('connection', (socket) => {
    console.log('A new user has connected to chat...');

    socket.on('add message', (data) => {
      console.log(data);
      console.log(`New message from: ${data.username} - Message: ${data.body}`);
      chat.emit('receive message', data);
    });

  });
};

module.exports = initSocket;
