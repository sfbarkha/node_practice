const express=require('express');
const port=3000;
const app=express();
const path=require('path');


app.get('/',function(request,response){
	//response.send("HEllo world");
	response.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/aboutme',function(request,response){
	//response.send("HEllo world");
	response.sendFile(path.join(__dirname + '/aboutme.html'));
});

app.get('/contact',function(request,response){
response.sendFile(path.join(__dirname + '/contact.html'));
});

app.post('/contact',function(request,response){
console.log("post request received now send a response using response objecxt");
response.sendFile(path.join(__dirname + '/success.html'));
});

app.listen(port,function(){
console.log("Listening on port 3000");

})