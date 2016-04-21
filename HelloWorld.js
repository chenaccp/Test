// var http = require('http');

// http.createServer(function(request,response){
//   response.writeHead(200,{'Content-Type': 'text/plain'});
//   response.end('Hello World\n');
// }).listen(8124);

// console.log('Server running at http://127.0.0.1:8124/');



var _ = require('underscore');
var Q = require('q');
var fs = require('fs');
// var context = {
//     name: "Alex",
//     City: "Beijing",
// };
// _.each([1,2,3], function(item_value,item_key){
// 	// console.trace(JSON.stringify(data));
// 	console.log('item_value: ' + item_value);
// 	console.log('item_key: ' + item_key);
// },function(context){
// 	console.log(context)
// });
// console.log(context);


var i,
  result = [];

var someArray = [{
		isAwesome: true,
		soVal: 123
		},{
		isAwesome: false,
		soVal: 678
		},{
		isAwesome: true,
		soVal: 12366
		},{
		isAwesome: false,
		soVal: 12359
	}];

// console.info(JSON.stringify(someArray));
// for(i = 0; i < someArray.length; i++) {
//   var someThing = someArray[i];
//   if(someThing.isAwesome === true) {
//       result.push(someArray[i]);
//   }
// }

// filter
// result = _.filter(someArray,function(data){
// 	return data.isAwesome === true;
// });
 
//reduce
// result = _.reduce([2,3,5,7],function(key,value){
//     return key+value;
// },0);

//map
// result = _.map(someArray,function(data){
// 	return data.isAwesome +':' + data.soVal;
// });

// console.log('result: ' + result[1].soVal);

// function fs_readFile (file, encoding) {
//   var deferred = Q.defer();
//   fs.readFile(file, encoding, function (err, data) {
//     if (err) deferred.reject(err); // rejects the promise with `er` as the reason
//     else deferred.resolve(data); // fulfills the promise with `data` as the value
//   })
//   return deferred.promise // the promise is returned
// }
// fs_readFile('myfile.txt','utf-8').then(console.log, console.error);

// var myFun = function(cb){
// 	console.log('myFun');
// 	// return 'sssss';
// 	return cb(null, 'aaaaa');
// };

// var fsReadFile = Q.nfcall(fs.readFile, 'myfile.txt','utf-8');
// fsReadFile.done(function(txt){
// 	console.info(txt);
// });

// Q.nfcall(myFun).done(function(txt){
// 		console.log(txt);
// 	});

// var fsDReadFile = Q.denodeify(fs.readFile);
// var result = fsDReadFile('myfile.txt','utf-8').then(function(res){
// 	return res;
// });

// result.done(function(ts){
// 	console.log(ts);
// });

var _ = require("underscore"); 
var obj_arr = [{'uid':'a234568', 'score': -300},{'uid':'b234561', 'score': 300},{'uid':'c234567', 'score': -100}]
obj_arr = _.sortBy(obj_arr,function(item){
	return -item.score;
})
console.log(obj_arr);

// var tt_arr = [1, 2, 3, 4, 5, 6];
// tt_arr = _.sortBy(tt_arr, function(num){ return Math.sin(num); });
// console.log('bbbb:',tt_arr);
// console.log(_.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); }));
