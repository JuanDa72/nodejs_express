import express from 'express';
import projectsRoutes from './routes/projects.routes.js'
import taskRoutes from './routes/task.routes.js'
import { json } from 'sequelize';

const app=express();

//Parte de los middleware
app.use(express.json());

app.use('/project', projectsRoutes);
app.use('/task', taskRoutes);

export default app;