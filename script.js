
const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  // Boucler sur items -> retirer la classe "is-active"
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  })
  
  const elementColor = el.dataset.activeColor;
  const target = el.dataset.target;
  
  // Styliser l'indicateur
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.backgroundColor = elementColor;
  indicator.style.left = `${el.offsetLeft}px`;
  
  // Ajout la classe is-active
  el.classList.add('is-active');
  el.style.color = elementColor;
}

items.forEach((item, index) => {
  item.addEventListener('click', e => {
    handleIndicator(e.target)
  });
  item.classList.contains('is-active') && handleIndicator(item);
});

const cars = [
  {
    model: "Toyota Corolla",
    year: 2022,
    price: "$20,000",
    image: "file:///C:/Users/MAJD%20BOUDEN/OneDrive/Bureau/zeb/Toyota_GR_COROLLA_RZ_MORIZO_Edition__(4BA-GZEA14H-BHFRZ)_(1).webp"
  },
  {
    model: "Ford Mustang",
    year: 2023,
    price: "$35,000",
    image: "file:///C:/Users/MAJD%20BOUDEN/OneDrive/Bureau/zeb/2022-ford-mustang-stealth-edition-1.webp"
  },
  {
    model: "Honda Civic",
    year: 2021,
    price: "$18,000",
    image: "file:///C:/Users/MAJD%20BOUDEN/OneDrive/Bureau/zeb/Honda-Civic-Exterior-150671.webp"
  },
    {
    model: "Toyota Corolla",
    year: 2022,
    price: "$20,000",
    image: "file:///C:/Users/MAJD%20BOUDEN/OneDrive/Bureau/zeb/Toyota_GR_COROLLA_RZ_MORIZO_Edition__(4BA-GZEA14H-BHFRZ)_(1).webp"
  },
    {
    model: "Toyota Corolla",
    year: 2022,
    price: "$20,000",
    image: "file:///C:/Users/MAJD%20BOUDEN/OneDrive/Bureau/zeb/Toyota_GR_COROLLA_RZ_MORIZO_Edition__(4BA-GZEA14H-BHFRZ)_(1).webp"
  },
    {
    model: "Toyota Corolla",
    year: 2022,
    price: "$20,000",
    image: "file:///C:/Users/MAJD%20BOUDEN/OneDrive/Bureau/zeb/Toyota_GR_COROLLA_RZ_MORIZO_Edition__(4BA-GZEA14H-BHFRZ)_(1).webp"
  },
    {
    model: "Toyota Corolla",
    year: 2022,
    price: "$20,000",
    image: "file:///C:/Users/MAJD%20BOUDEN/OneDrive/Bureau/zeb/Toyota_GR_COROLLA_RZ_MORIZO_Edition__(4BA-GZEA14H-BHFRZ)_(1).webp"
  },
    {
    model: "Toyota Corolla",
    year: 2022,
    price: "$20,000",
    image: "file:///C:/Users/MAJD%20BOUDEN/OneDrive/Bureau/zeb/Toyota_GR_COROLLA_RZ_MORIZO_Edition__(4BA-GZEA14H-BHFRZ)_(1).webp"
  },
  
];

const carListings = document.getElementById("carListings");
const searchInput = document.getElementById("searchInput");

function displayCars(carsArray) {
  carListings.innerHTML = "";
  carsArray.forEach(car => {
    const carCard = document.createElement("div");
    carCard.className = "car-card";
    carCard.innerHTML = `
      <img src="${car.image}" alt="${car.model}" />
      <div class="info">
        <h3>${car.model}</h3>
        <p>Year: ${car.year}</p>
        <p>Price: ${car.price}</p>
      </div>
    `;
    carListings.appendChild(carCard);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredCars = cars.filter(car => car.model.toLowerCase().includes(query));
  displayCars(filteredCars);
});

window.onload = () => {
  displayCars(cars);
};



