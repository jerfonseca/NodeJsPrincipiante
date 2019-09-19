const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', (req, res)=>{
    res.send('<h1>Hola mundo con Express y Nodejs</h1>');
});

server.listen(3000, () =>{
    console.log('Server on port 3000'.red);
});