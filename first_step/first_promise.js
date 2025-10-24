const { rejects } = require("assert");
const { resolve } = require("path");

const true_promise=true;

const my_promise= new Promise((resolve, reject) => {
    setTimeout(() => {
        if(true_promise) {
            resolve("Promesa cumplida");
    }
    else {
        reject("Promesa rechazada");
        }

    },3000);

    my_promise.then((valor) => {
        console.log(valor);
    })

});
