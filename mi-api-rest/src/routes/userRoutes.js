import express from 'express';
import { registerUser, uploadProfilePicture, getProfilePicture, loginUser } from '../controllers/authController.js';

import authMiddleware from '../middleware/auth.js';
import upload from '../middleware/multer.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/:id/profile-picture', authMiddleware, upload.single('profile_picture'), uploadProfilePicture);
router.get('/:id/profile-picture', authMiddleware, getProfilePicture);
export default router;
