import * as Car from '../models/car.js';
export const createCar = async (req, res) => {
  try {
    const { brand, model, year, owner } = req.body;
    const carId = await Car.createCar(brand, model, year, owner);
    res.status(201).json({ message: 'Auto creado exitosamente', carId });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el auto', error });
  }
};

export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.getAllCars();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los autos', error });
  }
};

export const getCarById = async (req, res) => {
  try {
    const car = await Car.getCarById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Auto no encontrado' });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el auto', error });
  }
};

export const updateCar = async (req, res) => {
  try {
    const { brand, model, year, owner } = req.body;
    await Car.updateCar(req.params.id, brand, model, year, owner);
    res.status(200).json({ message: 'Auto actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el auto', error });
  }
};

export const deleteCar = async (req, res) => {
  try {
    await Car.deleteCar(req.params.id);
    res.status(200).json({ message: 'Auto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el auto', error });
  }
};
