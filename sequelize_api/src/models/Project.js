import {DataTypes} from "sequelize";

import sequelize from '../config/database.js'

import { Task } from "./Task.js";

export const Project=sequelize.define('projects',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING
    },

    priority: {
        type: DataTypes.STRING
    },

    description:{
        type: DataTypes.STRING
    }
});

Project.hasMany(Task, {
    foreignKey: 'projectId',  //Indicamos que proyecto tiene muchas tareas xd
    sourceKey: 'id'
})

Task.belongsTo(Project, {
    foreignKey: 'projectId',
    targetId: 'id'
})