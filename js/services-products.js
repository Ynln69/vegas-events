document.addEventListener("DOMContentLoaded", () => {
  fetch("../data/services-data.json")
    .then((response) => response.json())
    .then((data) => {
      let servicesData = data.services;
      const servicesList = document.getElementById("services-products");

      if (!servicesList) {
        return;
      }

      function displayProducts() {
        servicesList.innerHTML = "";
        servicesData.forEach((service) => {
          const li = document.createElement("li");
          li.classList.add("card-item");

          li.innerHTML = `
            <div class="card-thumb">
              <img src="../${service.photo}" alt="${service.title}" width="370"
                  class="card-img">
              <div class="card-overlay">
                <p class="bg-text" >
                ${service.description}
                </p>
              </div>
            </div>
            <div class="card-box">
                <h2 class="card-title">${service.title}</h2>
                <p class="card-text">${service.type}</p>
                <p class="card-text price">${service.price}</p>
            </div>
            `;
          servicesList.appendChild(li);
        });
      }
      displayProducts();
    })
    .catch((error) => console.error("Error loading JSON:", error));
});
