function priority(value){
    console.log(`This function has priority in the async group and has
        ${value} value`);
}

console.log("Imprimiendo antes de setInmediate");

//Llamada a priority

setImmediate(priority, 4);

console.log("Impriminedo despues de setInmediate");
