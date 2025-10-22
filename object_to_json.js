const curso={
    "profesor":"oscar",
    "estudiantes":34,
    "es_publico":false
}

//Podemos crear el objeto usando comillas para las claves o no xd

const asignatura ={
    profesor:"javier",
    tematica:"erps",
    duracion:4
}


//Convertir a json
curso_json=JSON.stringify(curso);

console.log(curso);
console.log(asignatura);
console.log(curso_json);