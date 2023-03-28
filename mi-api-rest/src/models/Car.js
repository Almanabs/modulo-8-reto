import db from '../db.js';

export async function createCar(brand, model, year, owner) {
  const result = await db.query('INSERT INTO cars(brand, model, year, owner) VALUES($1, $2, $3, $4) RETURNING id', [brand, model, year, owner]);
  return result.rows[0].id;
}

export async function getAllCars() {
  const result = await db.query('SELECT * FROM cars');
  return result.rows;
}

export async function getCarById(id) {
  const result = await db.query('SELECT * FROM cars WHERE id = $1', [id]);
  return result.rows[0];
}

export async function updateCar(id, brand, model, year, owner) {
  await db.query('UPDATE cars SET brand = $1, model = $2, year = $3, owner = $4 WHERE id = $5', [brand, model, year, owner, id]);
}

export async function deleteCar(id) {
  await db.query('DELETE FROM cars WHERE id = $1', [id]);
}
