import {Project} from '../models/Project.js'
import {Task} from '../models/Task.js'


const getProjects= async (req, res)=>{
    try{
        const projects= await Project.findAll()
        res.json(projects);
    }

    catch(error){
        return res.status(500).json({
            message:error.message
        })
    }

};

const getProject=async(req, res)=>{
    try{
        const id=req.params.id;
        const project = await Project.findOne({
            where: {
                //Se define implicitamente que es id:id
                id
            }
        })

        if(!project){
            return res.status(404).json({
                message:'Project not found'
            })
        }

        res.json(project);
    }

    catch(error){
        return res.status(500).json({
            message:error.message
        })
    }
}


const createProject= async (req, res)=>{
    const {name, priority, description}=req.body;
    try{
        const newProject=await Project.create({
        name,
        description,
        priority
    })

    console.log(newProject);
    res.json(newProject);

    }

    catch(error){
        return res.status(500).json({
            message:error.message
        })
    }
    
};


const updateProject=async (req, res)=>{

    const id=req.params.id;
    const {name, priority, description}=req.body;

    try {
        const project=await Project.findByPk(id);
        project.name=name;
        project.priority=priority;
        project.description=description;

        await project.save();
        res.json(project);
    }

    catch(error){
        return res.status(500).json({
            message: error.message
        })
    }   
}


const deletedProject=async (req, res)=>{

    try {
        const id=req.params.id;
        await Project.destroy({
        where: {
            id
            }
        });
        res.sendStatus(204);
    }   

    catch(error){
        return res.status(500).json({
            message: error.message
        })
    }

}


const getProjectTasks=async(req, res)=>{
    const id=req.params.id;
    
    try{
        const tasks=await Task.findAll({
            where:{
                projectId:id
            }
        });
        res.json(tasks);
    }

    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
        
}


export default {getProjects, getProject, createProject, updateProject, deletedProject, getProjectTasks};