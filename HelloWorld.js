// var http = require('http');

// http.createServer(function(request,response){
//   response.writeHead(200,{'Content-Type': 'text/plain'});
//   response.end('Hello World\n');
// }).listen(8124);

// console.log('Server running at http://127.0.0.1:8124/');



var _ = require('underscore');
var context = {
    name: "Alex",
    City: "Beijing",
};
_.each({one: 6, two: 2, three: 3}, function(data){
	// console.trace(JSON.stringify($data));
	console.log(data);
},function(context){
	console.log()
});
console.log(context);