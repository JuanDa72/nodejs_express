const { resolve } = require("path");

function result_pizza(){
    return Math.random()<0.8;
}

const pizza_promise=new Promise((resolve, reject) => {
    setTimeout(() => {
        if(result_pizza()){
            resolve('Pizza entregada con éxito');
        }

        else{
            reject('Pizza sin entregar');
        }
    }, 3000);
});

const accepted=(message) => {
    console.log(message);
}

const rechazed=(message)=>{
    console.log(message);
}


//Nota como en estos ejemplos estamos usando un único then,
//es posible pero lo recomendado es utilizar catch
pizza_promise.then(accepted, rechazed);