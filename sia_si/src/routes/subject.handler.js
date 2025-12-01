import { Router } from 'express';

export class SubjectHandler {
  constructor(subjectService) {
    this.subjectService = subjectService;
    this.router = Router();
    this.setupRoutes();
  }

  getRouter() {
    return this.router;
  }

  setupRoutes() {
    this.router.get('/', this.findAll.bind(this));
    this.router.get('/semestre/:semestre', this.findBySemestre.bind(this));
    this.router.get('/carrera/:carreraId', this.findByCarreraId.bind(this));
    this.router.get('/:id', this.findById.bind(this));
    this.router.post('/', this.create.bind(this));
    this.router.put('/:id', this.update.bind(this));
    this.router.delete('/:id', this.delete.bind(this));
  }

  async findAll(req, res) {
    try {
      const materias = await this.subjectService.findAll();
      res.status(200).json(materias);
    } catch (error) {
      console.error('Error in SubjectHandler.findAll:', error);
      res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
  }

  async findBySemestre(req, res) {
    try {
      const semestre = parseInt(req.params.semestre);
      if (isNaN(semestre)) {
        return res.status(400).json({ message: 'Semestre inválido' });
      }
      const materias = await this.subjectService.findBySemestre(semestre);
      res.status(200).json(materias);
    } catch (error) {
      console.error('Error in SubjectHandler.findBySemestre:', error);
      res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: 'ID inválido' });
      }
      const materia = await this.subjectService.findById(id);
      res.status(200).json(materia);
    } catch (error) {
      console.error('Error in SubjectHandler.findById:', error);
      if (error.message.includes('no encontrada')) {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const newMateria = await this.subjectService.create(data);
      res.status(201).json(newMateria);
    } catch (error) {
      console.error('Error in SubjectHandler.create:', error);
      if (error.message.includes('no existe')) {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
  }

  async update(req, res) {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: 'ID inválido' });
      }
      const data = req.body;
      const updatedMateria = await this.subjectService.update(id, data);
      res.status(200).json(updatedMateria);
    } catch (error) {
      console.error('Error in SubjectHandler.update:', error);
      if (error.message.includes('no encontrada')) {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: 'ID inválido' });
      }
      await this.subjectService.delete(id);
      res.status(200).json({ message: 'Materia eliminada exitosamente' });
    } catch (error) {
      console.error('Error in SubjectHandler.delete:', error);
      if (error.message.includes('no encontrada')) {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
  }

  async findByCarreraId(req, res) {
    try {
      const carreraId = parseInt(req.params.carreraId);
      if (isNaN(carreraId)) {
        return res.status(400).json({ message: 'ID de carrera inválido' });
      }
      const materias = await this.subjectService.findByCarreraId(carreraId);
      res.status(200).json(materias);
    } catch (error) {
      console.error('Error in SubjectHandler.findByCarreraId:', error);
      if (error.message.includes('no encontrada')) {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
  }
}
