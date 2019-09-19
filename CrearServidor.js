const http = require('http');
const colors = require('colors');

//crea un servidor
/*http.createServer(function(request, response){
    response.writeHead(200, { 'Content-type': 'text/html'}); //Codigo de respuesta, tipo de contenido
    response.write('<h1>Hola Mundo desde Nodejs 2</h1>');
    response.end(); //para finalizar el response y que escuche nuevas peticiones
}).listen(3000, function(){
    console.log('Server on port 3000');
}); //escuchar en el puerto 3000
*/

//Codigo mas elaborado
const handlerServer = function(request, response){
    response.writeHead(200, { 'Content-type': 'text/html'}); //Codigo de respuesta, tipo de contenido
    response.write('<h1>Hola Mundo desde Nodejs</h1>');
    response.end(); //para finalizar el response y que escuche nuevas peticiones
}

const server = http.createServer(handlerServer);

server.listen(3000, function(){
    console.log('Server on port 3000'.green);
});

//localhost:3000
//ctr+c(2 veces) para cancelar el servidor desde consola
