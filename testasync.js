var express = require("express");
var path = require("path");
var fs = require("fs");
app = express();
var port = 8080;
app.listen(port);
console.log("server started "+port);
app.get('/callback',function(req,res){
	
	testasync(function(val){
	
		res.send(val);
		
	});
	
});


app.get('/promise',function(req,res){
	
	
	testasPromise().then(function(resolve){
		
		res.send(resolve);
		
		
	}).catch(function(err){
		
		console.log(err.message);
		
	});
	
	
});
//Read a file Asynchronoulsy like we usually do in node
function testasync(callback){

	fs.readFile('test4.txt', (err, data) => {
	  if (err) throw err;
	  callback(data);
	});

}
//Read a file Asynchronously by using Promises
function testasPromise(){
	
	return new Promise(function(resolve,reject){
		
		fs.readFile('test4.txt', (err, data) => {
			  if (err) throw reject(err);
			  resolve(data);
		});
		
	});
	
	
}