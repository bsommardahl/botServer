var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.post('/stop', function(req,res){
  io.emit('stop', { for: 'everyone' });
  console.log("stop");
  res.json({"status": "ok"});
});

app.post('/right', function(req,res){
  io.emit('move right', { for: 'everyone' });
  console.log("right");
  res.json({"status": "ok"});
});

app.post('/left', function(req,res){
  io.emit('move left', { for: 'everyone' });
  console.log("left");
  res.json({"status": "ok"});
});

app.post('/forward', function(req,res){
  io.emit('move forward', { for: 'everyone' });
  console.log("forward");
  res.json({"status": "ok"});
});

app.post('/backward', function(req,res){
  io.emit('move backward', { for: 'everyone' });
  console.log("backward");
  res.json({"status": "ok"});
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

var port = process.env.PORT || 3000;

http.listen(port, function(){
  console.log('listening on *:'+port);
});
