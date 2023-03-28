import db from '../db.js';
import bcrypt from 'bcryptjs';


async function createUser(username, password) {
  const hashedPassword = await bcrypt.hash(password, 8);
  const result = await db.query('INSERT INTO users(username, password) VALUES($1, $2) RETURNING id', [username, hashedPassword]);
  return result.rows[0].id;
}

async function findByUsername(username) {
  const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
  return result.rows[0];
}
async function updateUserProfilePicture(id, profile_picture) {
    await db.query('UPDATE users SET profile_picture = $1 WHERE id = $2', [profile_picture, id]);
  }
  
  async function getUserProfilePicture(id) {
    const result = await db.query('SELECT profile_picture FROM users WHERE id = $1', [id]);
    return result.rows[0].profile_picture;
  }

  async function findById(id) {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }
  
  
  export {
    createUser,
    findByUsername,
    updateUserProfilePicture,
    getUserProfilePicture,
    findById,
  };
  
  