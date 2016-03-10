// var http = require("http");

// function start()
// {
// 	function onRequest(request,response)
// 	{
// 		console.log("Request received.");
// 		response.writeHead(200,{"Content-Type":"text/plain"});
// 		response.write("Hello World shuai chen");
// 		response.end();
// 	}
// 	http.createServer(onRequest).listen(8124);
// 	console.log("Server has started.");
//  }

// exports.start = start;

// var fs = require('fs')
//     , http = require('http')
//     , socketio = require('socket.io');
  
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-type': 'text/html'});
//     res.end(fs.readFileSync(__dirname + '/index.html'));
// }).listen(8080, function() {
//     console.log('Listening at: http://localhost:8080');
// });
  
// socketio.listen(server).on('connection', function (socket) {
//     socket.on('message', function (msg) {
//         console.log('Message Received: ', msg);
//         socket.broadcast.emit('message', msg);
//     });
// });


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
 
app.get('/', function(req, res){
    res.send('<h1>Welcome Realtime Server</h1>');
});
 
//在线用户
var onlineUsers = {};
//当前在线人数
var onlineCount = 0;
 
io.on('connection', function(socket){
    console.log('a user connected');
     
    //监听新用户加入
    socket.on('login', function(obj){
        //将新加入用户的唯一标识当作socket的名称，后面退出的时候会用到
        socket.name = obj.userid;
         
        //检查在线列表，如果不在里面就加入
        if(!onlineUsers.hasOwnProperty(obj.userid)) {
            onlineUsers[obj.userid] = obj.username;
            //在线人数+1
            onlineCount++;
        }
         
        //向所有客户端广播用户加入
        io.emit('login', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj});
        console.log(obj.username+'加入了聊天室');
    });
     
    //监听用户退出
    socket.on('disconnect', function(){
        //将退出的用户从在线列表中删除
        if(onlineUsers.hasOwnProperty(socket.name)) {
            //退出用户的信息
            var obj = {userid:socket.name, username:onlineUsers[socket.name]};
             
            //删除
            delete onlineUsers[socket.name];
            //在线人数-1
            onlineCount--;
             
            //向所有客户端广播用户退出
            io.emit('logout', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj});
            console.log(obj.username+'退出了聊天室');
        }
    });
     
    //监听用户发布聊天内容
    socket.on('message', function(obj){
        //向所有客户端广播发布的消息
        io.emit('message', obj);
        console.log(obj.username+'说：'+obj.content);
    });
   
});
 
http.listen(3000, function(){
    console.log('listening on *:3000');
});
  