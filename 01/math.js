function add(x1,x2){
    return x1+x2;
}

function substract(x1,x2){
    return x1-x2;
}
function multiply(x1,x2){
    return x1*x2;
}
function divide(x1,x2){
    if(x2 == 0)
    {
        console.log('no se puede dividir por 0');
    }else{
        return x1/x2;
    }
}

//Exportar las funciones definidas
//exports.nombre_con_el_que_se_exporta = function
/*exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;*/

//Exportar mediante un objeto
const Math = {};

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;