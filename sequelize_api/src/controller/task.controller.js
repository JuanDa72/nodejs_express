import {Task} from '../models/Task.js';



const getTasks=async(req,res)=>{
    try {
        const tasks=await Task.findAll();
        res.json(tasks);
    }
    catch (error) {
        res.status(500).json({
            message:error.message
        });
    }
};

const getTask=async(req,res)=>{
    try {
        const id=req.params.id;
        const task=await Task.findByPk(id);
        if(!task){
            return res.status(404).json({
                message:`Task with id ${id} not found`
            });
        }
        res.json(task);
    }

    catch (error){
        res.status(500).json({
            message:error.message
        });
    }

};

const createTask=async(req,res)=>{
    const {name, done, projectId}=req.body;
    try{
        const newTask=await Task.create({
            name,
            done,
            projectId
        })
        res.json(newTask);
    }
    
    catch(error){
        res.status(500).json({
            message:error.message
        }); 
    }
};


const updateTask=async(req,res)=>{
    const id=req.params.id;
    const {name, done, projectId}=req.body;

    try{
        const task=await Task.findByPk(id);
        //Tambien se podría con Task.set
        task.name=name;
        task.done=done;
        task.projectId=projectId;

        //Ahora necesitamos guardar
        await task.save();
        res.json(task);
    }

    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

const deletedTask=async(req,res)=>{
    const id=req.params.id;
    
    try {
        await Task.destroy({
            where: {
                id
            }
        })
        res.sendStatus(204);
    }
    catch (error){
        res.status(500).json({
            message:error.message
        })
    }
};   


export default {getTasks,getTask,createTask,updateTask,deletedTask};