const { error } = require("console");

function ordenarProducto(producto){
    return new Promise ((resolve, reject) => {
        console.log("Ordenando producto");
        if(producto==="camiseta"){
            resolve('Envío procesado correctamente');
        }
        else{
            reject('Ocurrió un error inesperado, por favor intente nuevamente');
        }
    }, 2000);
}

function procesarPedido(respuesta){
    return new Promise((resolve) => {
        console.log("Generando el envío");
        console.log(`la respuesta fue "${respuesta}"`);
        setTimeout(() => {
            resolve('Gracias por tu compra, disfruta de tu producto :S');
        }, 4000);
    });
}

//Esta es una forma de sincronizar funciones asin :/

ordenarProducto('camiseta').then((respuesta)=> {
    console.log('Respuesta recibida');
    console.log(respuesta);
    return procesarPedido(respuesta);
}).
then((respuesta_del_proceso) => {
    console.log(respuesta_del_proceso);
}).
catch(error => {
    console.log(error);
});

