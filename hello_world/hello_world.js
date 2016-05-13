var http = require("http");
var manejador =  function(solicitud,respuesta){
	console.log("hola mundo ");
	respuesta.end("Hola mundo");
};
var servidor = http.createServer(manejador);
servidor.listen('3000','0.0.0.0');