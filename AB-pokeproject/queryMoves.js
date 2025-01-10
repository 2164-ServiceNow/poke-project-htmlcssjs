const baseUrl = "https://pokeapi.co/api/v2/move/";

function showAlert(message, type = "success") {
  const container = document.querySelector(".container");
  const alert = document.createElement("div");
  alert.className = `alert alert-${type} text-center`;
  alert.textContent = message;
  container.prepend(alert);
  setTimeout(() => alert.remove(), 3000);
}

async function fetchMovesAsync() {
  try {
    console.log("Fetching moves...");
    const response = await fetch(baseUrl);
    console.log("Response received:", response);
    const data = await response.json();
    console.log("Data fetched:", data);
    displayMoves(data.results);
    showAlert("Pokemon Moves Fetched Successfully!");
  } catch (error) {
    console.error("Error fetching moves:", error);
    showAlert("Error fetching moves!", "danger");
  }
}

function displayMoves(moves) {
  const container = document.getElementById("movesContainer");
  if (!container) {
    console.error("Container not found!");
    return;
  }
  container.innerHTML = moves
    .map(
      (move) => `
      <div class="col-md-4">
        <div class="card shadow-lg mb-4">
          <div class="card-body text-center">
            <h5 class="card-title">${move.name}</h5>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}
