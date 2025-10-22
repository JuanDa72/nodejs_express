function saludar(nombre){
  return `Hola ${nombre}`;
}

function despedir(nombre){
  return `Adios ${nombre}`;
}

//console.log(saludar("Juan"));

//El nombre que indique despues del exports será el que
//Utilizarán las clases que lo importen
module.exports.saludar=saludar; 
module.exports.despedir=despedir;