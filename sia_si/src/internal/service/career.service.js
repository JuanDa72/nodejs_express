import { CareerRepository } from '../repository/career.repository.js';

export class CareerService {
  constructor(careerRepository) {
    this.careerRepository = careerRepository;
  }

  async create(data) {
    try {
      return await this.careerRepository.create(data);
    } catch (error) {
      console.error('Error in CareerService.create:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.careerRepository.findAll();
    } catch (error) {
      console.error('Error in CareerService.findAll:', error);
      throw error;
    }
  }

  async findById(id) {
    try {
      const carrera = await this.careerRepository.findById(id);
      if (!carrera) {
        throw new Error('Carrera no encontrada');
      }
      return carrera;
    } catch (error) {
      console.error('Error in CareerService.findById:', error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const existingCarrera = await this.careerRepository.findById(id);
      if (!existingCarrera) {
        throw new Error('Carrera no encontrada');
      }
      return await this.careerRepository.update(id, data);
    } catch (error) {
      console.error('Error in CareerService.update:', error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const existingCarrera = await this.careerRepository.findById(id);
      if (!existingCarrera) {
        throw new Error('Carrera no encontrada');
      }
      return await this.careerRepository.delete(id);
    } catch (error) {
      console.error('Error in CareerService.delete:', error);
      throw error;
    }
  }
}
