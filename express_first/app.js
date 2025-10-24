//Importa una función express
//const express=require('express');

import dotenv from 'dotenv'

dotenv.config();

import express from 'express';

import { infoCursos } from './cursos.js';

import { infoCursosVideojuegos } from './p_cursos.js';

//Para verificar que si importamos correctamente el json de los datos
//console.log(infoCursos);

//Esa función retorna un objeto con un montón de métodos útiles xd
const app=express();

app.use(express.json())

//La ruta en este caso es la raiz tipo localhost:3000
app.get('/', (req, res) => {

  res.send("Mi primer servidor xd");

});

//La ruta en este caso es raiz/cursos
app.get('/cursos', (req, res) => {

  res.json(infoCursos);

});

//Ruta para obtener digamos los cursos de matematicas solamente
//app.get('/cursos/matematicas', (req,res)=>{
    //res.json(infoCursos.matematicas);
//})

//Parametros de url en express
//Podemos indicar que tipo de parametro queremmos, ya sea de path
//query o tambien en el body

//Ejemplo usando variables path para que la url indique el tipo de lenguaje

app.get('/cursos/programacion/:lenguaje', (req, res) => {
    const language=req.params.lenguaje;
    const answer=infoCursos.programacion.filter(programacion => programacion.lenguaje===language);

    //Manejo de posible error
    if(answer==0){
        return res.status(404).send("No tenemos cursos de programación con este lenguaje");
    }

    res.json(answer);
})

//Ejemplo de parametro query
app.get('/cursos/matematicas', (req, res) => {

    const answer=infoCursos.matematicas;

    if(answer.length ===0 ){
        return res.status(404).send("No hay cursos de matematicas disponibles actualmente");
    }

    if(req.query.ordenar==='vistas'){
        answer.sort((a,b)=>{
            return b.vistas-a.vistas
        });
    }

    res.json(answer);

});


const routeCursosvideojuegos=express.Router();

//Ahora usando rutas 
app.use('/cursos_videojuegos/desarrollo_videojuegos',routeCursosvideojuegos);


routeCursosvideojuegos.get('/:motor',(req,res)=>{
    const motor=req.params.motor;
    const answer=infoCursosVideojuegos.desarrollo_videojuegos.filter(curso => {
        return curso.motor==motor;
    })

    if(answer.length===0){
        return res.status(404).send("No hay cursos de videojuegos disponibles con este motor");
    }

    res.json(answer);


})


//process viene con node xd accedemos a las variables de entorno
// y miramos si tenemos definido un puerto, si es así entonces lo usa
//si no usa el 1515 xd
const PUERTO= process.env.PORT || 1515;



//Activamos el servidor para que se ponga a escuchar
app.listen(PUERTO,() => {
    console.log(`Server running on ${PUERTO}`);
});