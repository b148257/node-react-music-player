var express = require('express');
var path = require('path');

var app = express();

var songs = {
	"song" :[
		{
			"songname":"海阔天空",
			"songid":"266907369",
			"artistname":"T榜"
		},
		{
			"songname":"海阔天空",
			"songid":"266907369",
			"artistname":"T榜"
		}
	]
}

app.use(express.static(path.join(__dirname, '/build')));

app.get('/list', function(req, res){
	console.log('/link');
	res.end(JSON.stringify(songs));
})

app.get('/hehe',function(req,res){
	console.log('...');
	res.end();
})

var server = app.listen(3000, function(){
	var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
})


