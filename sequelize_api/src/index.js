//Intentando ejecutar servidor junto con prueba de conexión
import app from './app.js';
import sequelize from './config/database.js';
import {config} from 'dotenv';

import './models/Project.js'
import './models/Task.js'


config();

const PORT=process.env.PORT

async function main(){
    try {
        await sequelize.sync({alter: true})
        app.listen(PORT);
    }

    catch(error){
        console.log(error);
    }
}

main();


