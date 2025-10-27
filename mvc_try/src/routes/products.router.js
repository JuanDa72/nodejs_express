import express from 'express';
import productosController from '../controllers/productos.controller.js';

const product_router=express.Router();

product_router.get('/',productosController.index);

export {product_router}