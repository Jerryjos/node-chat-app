const path=require('path');
const express=require('express');
const socketIO=require('socket.io');
const http=require('http');
var {generateMessage}=require('././utils/message');
const publicPath=path.join(__dirname,'../public');
var app=express();
var port=process.env.PORT || 3000;
var server=http.createServer(app);
var io=socketIO(server);
app.use(express.static(publicPath));
io.on('connection',(socket)=>{
  console.log('new user connected');
  socket.emit('newMessage',generateMessage('admin','welcome to chat app'));
  socket.broadcast.emit('newMessage',generateMessage('admin','new user added'));
  socket.on('disconnect',()=>{
    console.log('user disconected');
  });

  socket.on('createMessage',(message)=>{
    console.log('createMessage',message);
    io.emit('newMessage',generateMessage(message.from,message.text));

    // socket.broadcast.emit('newMessage',{
    //   from:message.from,
    //   text:message.text,
    //   completed:new Date().getTime()
    // });
  });
});

server.listen(port,()=>{
  console.log(`port started on ${port}`);
});
