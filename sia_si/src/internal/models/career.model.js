import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Carrera = sequelize.define('Carrera', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigo_plan: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  creditos_totales: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Carrera;
