import { Carrera } from '../../internal/models/index.js';

export class CareerRepository {

  async create(data) {
    try {
      const carrera = await Carrera.create(data);
      return carrera.get({ plain: true });
    } catch (error) {
      console.error('Error creating Carrera:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      const carreras = await Carrera.findAll();
      return carreras.map(carrera => carrera.get({ plain: true }));
    } catch (error) {
      console.error('Error finding all Carreras:', error);
      throw error;
    }
  }

  async findById(id) {
    try {
      const carrera = await Carrera.findByPk(id);
      if (!carrera) {
        return null;
      }
      return carrera.get({ plain: true });
    } catch (error) {
      console.error('Error finding Carrera by ID:', error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const carrera = await Carrera.findByPk(id);
      if (!carrera) {
        return null;
      }

      await carrera.update(data);
      return carrera.get({ plain: true });
    }
    catch (error) {
      console.error('Error updating Carrera:', error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const carrera = await Carrera.findByPk(id);
      if (!carrera) {
        return null;
      }
      await carrera.destroy();
      return true;
    }
    catch (error) {
      console.error('Error deleting Carrera:', error);
      throw error;
    }
  }
}   