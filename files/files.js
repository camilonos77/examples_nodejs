var http = require("http"),
    fileSystem = require("fs");


//var page = fileSystem.readFileSync("./index.html");


var page = fileSystem.readFile("./index.html",function(err,html){


});

var manejador =  function(req,res){
	console.log("Example read file");
	res.write(page);
	res.end();
};
var servidor = http.createServer(manejador);
servidor.listen('3000','0.0.0.0');