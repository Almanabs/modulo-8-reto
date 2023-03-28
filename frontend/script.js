const API_BASE_URL = 'http://localhost:3000'; // Asegúrate de reemplazar esto con la URL de tu API si es diferente

async function fetchCars() {
  const response = await fetch(`${API_BASE_URL}/cars`); // Asume que hay un punto final GET en '/cars'
  const cars = await response.json();
  displayCars(cars);
}

function displayCars(cars) {
  const carList = document.getElementById('car-list');
  carList.innerHTML = '';

  cars.forEach((car) => {
    const carItem = document.createElement('div');
    carItem.className = 'car-item';

    const carTitle = document.createElement('h3');
    carTitle.textContent = `${car.brand} ${car.model}`;
    carItem.appendChild(carTitle);

    const carYear = document.createElement('p');
    carYear.textContent = `Year: ${car.year}`;
    carItem.appendChild(carYear);

    const carOwner = document.createElement('p');
    carOwner.textContent = `Owner: ${car.owner}`;
    carItem.appendChild(carOwner);

    carList.appendChild(carItem);
  });
}

fetchCars();
