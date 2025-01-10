// Using XMLHttpRequest
function fetchItemsWithXHR() {
    const xhr = new XMLHttpRequest();
    const endpoint = "https://pokeapi.co/api/v2/item?limit=10";
  
    xhr.open("GET", endpoint, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log("XMLHttpRequest Response:", JSON.parse(xhr.responseText));
      } else {
        console.error("Error fetching data via XMLHttpRequest");
      }
    };
    xhr.onerror = function () {
      console.error("Network error occurred while fetching via XMLHttpRequest");
    };
    xhr.send();
  }
  
  // Using Fetch API with .then()
  function fetchItemsWithFetchThen() {
    const endpoint = "https://pokeapi.co/api/v2/item?limit=10";
  
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetch API Response:", data);
      })
      .catch((error) => {
        console.error("Error fetching data via Fetch API:", error);
      });
  }
  
  // Using Async/Await
  async function fetchItemsWithAsyncAwait() {
    const endpoint = "https://pokeapi.co/api/v2/item?limit=10";
  
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Async/Await Response:", data);
    } catch (error) {
      console.error("Error fetching data via Async/Await:", error);
    }
  }
  
  // Function to display results on the page (using Async/Await)
  async function displayItems() {
    const endpoint = "https://pokeapi.co/api/v2/item?limit=10";
  
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
  
      const container = document.getElementById("itemsContainer");
      container.innerHTML = ""; // Clear previous results
  
      // Loop through the items and display them
      data.results.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.className = "item";
        itemElement.innerHTML = `<p><strong>Item Name:</strong> ${item.name}</p>`;
        container.appendChild(itemElement);
      });
    } catch (error) {
      console.error("Error displaying items:", error);
    }
  }
  