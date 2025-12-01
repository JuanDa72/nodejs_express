import { Router } from 'express';

export class CareerHandler {
  constructor(careerService) {
    this.careerService = careerService;
    this.router = Router();
    this.setupRoutes();
  }

  getRouter() {
    return this.router;
  }

  setupRoutes() {
    this.router.get('/', this.findAll.bind(this));
    this.router.get('/:id', this.findById.bind(this));
    this.router.post('/', this.create.bind(this));
    this.router.put('/:id', this.update.bind(this));
    this.router.delete('/:id', this.delete.bind(this));
  }

  async findAll(req, res) {
    try {
      const carreras = await this.careerService.findAll();
      res.status(200).json(carreras);
    } catch (error) {
      console.error('Error in CareerHandler.findAll:', error);
      res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: 'ID inválido' });
      }
      const carrera = await this.careerService.findById(id);
      res.status(200).json(carrera);
    } catch (error) {
      console.error('Error in CareerHandler.findById:', error);
      if (error.message.includes('no encontrada')) {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const newCarrera = await this.careerService.create(data);
      res.status(201).json(newCarrera);
    } catch (error) {
      console.error('Error in CareerHandler.create:', error);
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
      const updatedCarrera = await this.careerService.update(id, data);
      res.status(200).json(updatedCarrera);
    } catch (error) {
      console.error('Error in CareerHandler.update:', error);
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
      await this.careerService.delete(id);
      res.status(200).json({ message: 'Carrera eliminada exitosamente' });
    } catch (error) {
      console.error('Error in CareerHandler.delete:', error);
      if (error.message.includes('no encontrada')) {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
  }
}
