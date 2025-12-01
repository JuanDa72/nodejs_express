import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Materia = sequelize.define('Materia', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  creditos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  semestre: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Materia;
