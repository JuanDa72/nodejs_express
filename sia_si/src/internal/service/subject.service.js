import { SubjectRepository } from '../repository/subject.repository.js';
import { CareerRepository } from '../repository/career.repository.js';

export class SubjectService {
  constructor(subjectRepository, careerRepository) {
    this.subjectRepository = subjectRepository;
    this.careerRepository = careerRepository;
  }

  async create(data) {
    try {
      if (!data.carreraId) {
        throw new Error('La Materia debe estar asociada a una Carrera (carreraId es requerido).');
      }
      const carrera = await this.careerRepository.findById(data.carreraId);
      if (!carrera) {
        throw new Error('La Carrera asociada no existe');
      }
      return await this.subjectRepository.create(data);
    } catch (error) {
      console.error('Error in SubjectService.create:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.subjectRepository.findAll();
    } catch (error) {
      console.error('Error in SubjectService.findAll:', error);
      throw error;
    }
  }

  async findBySemestre(semestre) {
    try {
      return await this.subjectRepository.findBySemestre(semestre);
    } catch (error) {
      console.error('Error in SubjectService.findBySemestre:', error);
      throw error;
    }
  }

  async findByCarreraId(carreraId) {
    try {
      const carrera = await this.careerRepository.findById(carreraId);
      if (!carrera) {
        throw new Error('Carrera no encontrada');
      }
      return await this.subjectRepository.findByCarreraId(carreraId);
    } catch (error) {
      console.error('Error in SubjectService.findByCarreraId:', error);
      throw error;
    }
  }
}
