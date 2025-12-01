import Carrera from './career.model.js';
import Materia from './subject.model.js';

Carrera.hasMany(Materia, {
  foreignKey: 'carreraId',
  sourceKey: 'id',
  onDelete: 'CASCADE',
});
Materia.belongsTo(Carrera, {
  foreignKey: 'carreraId',
  targetKey: 'id',
});

export { Carrera, Materia };
