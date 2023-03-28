import { createUser, findByUsername, findById } from '../models/User.js';
import upload from '../middleware/multer.js';
import jwt from 'jsonwebtoken';
import config from '../../config.mjs';


const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userExists = await User.findByUsername(username);

    if (userExists) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    const userId = await User.createUser(username, password);

    res.status(201).json({ message: 'Usuario registrado exitosamente', userId });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario', error });
  }
};

const uploadProfilePicture = async (req, res) => {
  try {
    const userId = req.params.id;
    const profilePicturePath = req.file.path;

    await User.updateUserProfilePicture(userId, profilePicturePath);
    res.status(200).json({ message: 'Imagen de perfil actualizada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la imagen de perfil', error });
  }
};

const getProfilePicture = async (req, res) => {
  try {
    const userId = req.params.id;
    const profilePicturePath = await User.getUserProfilePicture(userId);

    if (!profilePicturePath) {
      return res.status(404).json({ message: 'Imagen de perfil no encontrada' });
    }
    res.status(200).sendFile(profilePicturePath, { root: '.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la imagen de perfil', error });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findByUsername(username);

    if (!user || !(await User.comparePassword(password, user.password))) {
      return res.status(401).json({ message: 'Usuario o contraseña incorrecta' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });

    res.status(200).json({ message: 'Autenticación exitosa', token });
  } catch (error) {
    res.status(500).json({ message: 'Error al autenticar', error });
  }
};

export {
  registerUser,
  uploadProfilePicture,
  getProfilePicture,
  loginUser,
};