/*var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections =[];

server.listen(process.env.PORT || 3000);
console.log('Server running...');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log('connected: %s sockets connected', connections.length);

  // Disconnect
  socket.on('disconnect', function(data){
    connections.splice(connections.indexOf(socket),1);
    console.log('Disconnected: %s sockets connected', connections.length);
  });
  socket.on('send message', function(data){
    io.sockets.emit('new message', {msg:data});
  })
}) */

var app=require ('express')();
var http= require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req,res){
  res.sendFile(__dirname+'/index.html');
})
io.on('connection',function(socket){
  console.log('one user connected.' + socket.id);
/*  socket.on('message', function(data){
    socket.emit('message',{message:data});
    console.log(data);
  })
*/
socket.on('obj',function(data){
    io.sockets.emit('obj',{
      x:data.x,
      y:data.y,
      z:data.z

    })
    console.log(data.x*Math.PI/180,data.y*Math.PI/180,data.z*Math.PI/180 );
  })
  socket.on('disconnect',function(){
    console.log('one user disconnected' + socket.id);
  })
})
http.listen(80,function(){
  console.log('server listening on port 80');
});
