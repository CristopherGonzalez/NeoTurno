var express = require("express");
var mongoose= require("mongoose");
mongoose.Promise = require("bluebird");
var bodyParser = require("body-parser");

var app = express();
app.set("view engine","ejs");
app.use(bodyParser.json());


app.use(express.static(__dirname));
app.use(express.static(__dirname+"js"));


app.get("/",function(req,res){
	console.log("direccionando a index");
	res.render(__dirname + "/index.html");
});

var server = app.listen(3000,'::1', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('corriendo en http://' + host + ':' + port);
    console.log('ruta: '+server);
});