import { Materia } from '../../internal/models/index.js';

export class SubjectRepository {

  async create(data) {
    try {
      const materia = await Materia.create(data);
      return materia.get({ plain: true });
    } catch (error) {
      console.error('Error creating Materia:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      const materias = await Materia.findAll();
      return materias.map(materia => materia.get({ plain: true }));
    } catch (error) {
      console.error('Error finding all Materias:', error);
      throw error;
    }
  }

  async findById(id) {
    try {
      const materia = await Materia.findByPk(id);
      if (!materia) {
        return null;
      }
      return materia.get({ plain: true });
    } catch (error) {
      console.error('Error finding Materia by ID:', error);
      throw error;
    }
  }

  async findBySemestre(semestre) {
    try {
      const materias = await Materia.findAll({ where: { semestre } });
      return materias.map(materia => materia.get({ plain: true }));
    } catch (error) {
      console.error('Error finding Materias by semestre:', error);
      throw error;
    }
  }

  async findByCarreraId(carreraId) {
    try {
      const materias = await Materia.findAll({ where: { carreraId } });
      return materias.map(materia => materia.get({ plain: true }));
    } catch (error) {
      console.error('Error finding Materias by Carrera ID:', error);
      throw error;
    }
  }

  async update(id, data){
    try {
        const subject = await Materia.findByPk(id);
        if(!subject){
            return null;
        }
        await subject.update(data);
        return subject.get({ plain: true });
    }
    catch(error){
        console.error("Error updating subject", error);
        throw error;
    }
  }

  async delete(id) {
    try {
      const subject = await Materia.findByPk(id);
      if (!subject) {
        return null;
      }
      await subject.destroy();
      return true;
    }
    catch (error) {
      console.error('Error deleting Materia:', error);
      throw error;
    }
  }
}
