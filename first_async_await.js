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

//Mismo ejemplo que en consecutive_promises pero ahora 
//usando async_await 

async function realizar_todo(producto){

    try{
        const respuesta=await ordenarProducto(producto);
        console.log("Respuesta recibida");
        console.log(respuesta);
        const respuestaProcesada= await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    }

    catch(error){
        console.log(error);
    }
}

realizar_todo("camiseta");

