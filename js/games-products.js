document.addEventListener("DOMContentLoaded", () => {
  fetch("../data/games-data.json")
    .then((response) => response.json())
    .then((data) => {
      let gamesData = data.games;
      const gamesList = document.getElementById("games-products");

      if (!gamesList) {
        return;
      }

      function displayProducts() {
        gamesList.innerHTML = "";
        gamesData.forEach((game) => {
          const li = document.createElement("li");
          li.classList.add("card-item");

          li.innerHTML = `
            <div class="card-thumb">
              <img src="../${game.photo}" alt="${game.title}" width="370"
                  class="card-img">
              <div class="card-overlay">
                <p class="bg-text" >
                ${game.description}
                </p>
              </div>
            </div>
            <div class="card-box">
                <h2 class="card-title">${game.title}</h2>
                <p class="card-text">${game.type}</p>
                <p class="card-text price">${game.price}</p>
            </div>
            `;
          gamesList.appendChild(li);
        });
      }
      displayProducts();
    })
    .catch((error) => console.error("Error loading JSON:", error));
});
