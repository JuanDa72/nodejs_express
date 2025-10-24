//Esta importación es una clase y por eso la ponemos en 
//mayusculas
const EventEmitter = require('events');

//Creamos un objeto de la clase 
const generator=new EventEmitter();


generator.on('Inicio de clase', (clase, estamina)=> {
    console.log(`Inicio de nueva clase ${clase} con ${estamina} estamina`);
})

//En este ejemplo emmiter hará rol de emisor y receptor 
generator.emit('Inicio de clase', 'Sistemas de información', 35);



