
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
http.listen(process.env.PORT || 5000,function(){
  console.log('server listening on port 5000');
});
