import 'dotenv/config';


import sequelize ,{testConnection} from '../internal/config/database.js';
import express, { json, urlencoded } from 'express';
import cors from 'cors'
import morgan from 'morgan';

import { createRepository } from '../internal/repository/repository.js';
import { createHandler } from '../routes/index.js';
import { createService } from '../internal/service/service.js';


const app = express();
app.use(json());
app.use(morgan('dev'));
app.use(urlencoded({ extended: true }));
app.use(cors());


async function main() {
    try {
        //Primero probamos la conexión
        await testConnection();

        await sequelize.sync({alter: true});

        const repos=createRepository();
        const services=createService(repos);
        const handler=createHandler(services);

        app.use('/api/carreras/',handler.careerHandler.getRouter());
        app.use('/api/materias/',handler.subjectHandler.getRouter());

        app.listen(process.env.API_PORT || 4000, () => {
            console.log(`Server is running on port ${process.env.API_PORT || 4000}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}

main();
