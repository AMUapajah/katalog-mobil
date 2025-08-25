document.addEventListener("DOMContentLoaded", () => {
  // Data mobil
  const cars = [
    {
      name: "Kijang Innova Reborn",
      price: "Rp 350.000.000",
      image: "./assets/image/download (8).jpg",
    },
    {
      name: "Kijang Innova Zenix",
      price: "Rp 450.000.000",
      image: "./assets/image/download (7).jpg",
    },
    {
      name: "Kijang Innova Venturer",
      price: "Rp 400.000.000",
      image: "./assets/image/download (6).jpg",
    },
    {
      name: "Kijang Innova G",
      price: "Rp 320.000.000",
      image: "./assets/image/download (5).jpg",
    },
    {
      name: "Kijang Innova V",
      price: "Rp 370.000.000",
      image: "./assets/image/images (2).jpg",
    },
    {
      name: "Kijang Innova Q",
      price: "Rp 410.000.000",
      image: "./assets/image/download (5).jpg",
    },
  ];

  const carContainer = document.getElementById("car-container");
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const carTemplate = document.getElementById("car-template");

  // Render mobil
  function renderCars(filteredCars) {
    carContainer.innerHTML = "";
    if (filteredCars.length === 0) {
      carContainer.innerHTML =
        '<p class="no-results">Tidak ada mobil yang ditemukan.</p>';
      return;
    }
    filteredCars.forEach((car) => {
      const cardClone = document.importNode(carTemplate.content, true);
      cardClone.querySelector(".car-image").src = car.image;
      cardClone.querySelector(".car-image").alt = car.name;
      cardClone.querySelector(".car-name").textContent = car.name;
      cardClone.querySelector(".car-price").textContent = car.price;
      carContainer.appendChild(cardClone);
    });
  }

  // Pencarian
  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm)
    );
    renderCars(filteredCars);
  }

  searchButton.addEventListener("click", handleSearch);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSearch();
  });

  // Smooth scroll navbar
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: "smooth",
        });
      }
    });
  });

  // Tampilkan semua mobil saat pertama
  renderCars(cars);
});
