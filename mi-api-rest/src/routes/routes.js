import express from 'express';
import userRoutes from './userRoutes.js';
import carRoutes from './carRoutes.js';
// import carRoutes from './carRoutes.js';
// router.use('/cars', carRoutes);

const router = express.Router();

router.use('/users', userRoutes);
router.use('/cars', carRoutes);

export default router;
