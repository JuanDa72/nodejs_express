import {Router} from 'express';

//Importando los controllers en donde tenemos las funciones no se porque xd
import projectController from '../controller/project.controller.js';

const router=Router();

router.get('/', projectController.getProjects);

//Con parametro de ruta para obtener por id
router.get('/:id',projectController.getProject);

router.post('/', projectController.createProject);

router.put('/:id',projectController.updateProject);

router.delete('/:id',projectController.deletedProject);

//Obteniendo todas las tareas de un proyecto o sea verificando
//que tengamos lo de las relaciones bien 

router.get('/:id/tasks', projectController.getProjectTasks);

export default router;
