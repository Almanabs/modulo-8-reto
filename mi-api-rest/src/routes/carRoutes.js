
import express from 'express';
import authMiddleware from '../middleware/auth.js';
import {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
} from '../controllers/carController.js';

const router = express.Router();

router.post('/', authMiddleware, createCar);
router.get('/', getAllCars); // Ruta pública
router.get('/:id', authMiddleware, getCarById);
router.put('/:id', authMiddleware, updateCar);
router.delete('/:id', authMiddleware, deleteCar);

export default router;
