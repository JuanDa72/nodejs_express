import sequelize from './database.js';

async function testConnection(){
    try {
        await sequelize.authenticate();
        console.log("Conexión xd ");
    }

    catch(error){
        console.log(error);
    }
}

testConnection();