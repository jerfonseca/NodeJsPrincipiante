const os = require('os');

/*console.log(os);

console.log(os.platform());
console.log(os.release());
console.log('free mem: ', os.freemem(), 'bytes');
console.log('total mem: ', os.totalmem(), 'bytes');*/

const fs = require('fs');

//Escribir Archivo
/*fs.writeFile('./texto.txt','linea uno', function(err){
    //funcion callback asincrono
    if(err){
        console.log(err);
    }else{
        console.log('Archivo creado');
    }    
});*/
//Codigo sincrono
//const file = fs.writeFile('./texto.txt','linea uno');

//Leer Archivo asincrono
fs.readFile('./texto.txt', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('ultima linea de codigo');