const itemRootUrl = "https://pokeapi.co/api/v2/item";

// Function to search for an item
async function queryItem() {
  const itemSearch = document.getElementById("itemSearch").value.trim();

  if (!itemSearch) {
    alert("Please enter an item name!");
    return;
  }

  try {
    // Fetch item details from the Pokémon API
    const response = await fetch(`${itemRootUrl}/${itemSearch.toLowerCase()}`);
    if (!response.ok) {
      throw new Error("Item not found");
    }

    const item = await response.json();
    updateItemCard(item); // Update the UI with fetched data
  } catch (error) {
    console.error(error.message);
    alert("Error fetching item data: " + error.message);
  }
}

// Function to update the item card with API data
function updateItemCard(item) {
  const itemName = document.getElementById("itemName");
  const itemId = document.getElementById("itemId");
  const itemCost = document.getElementById("itemCost");
  const attributeList = document.getElementById("attributeList");
  const itemImg = document.getElementById("itemImg");

  // Update item details
  itemName.textContent = `Item Name: ${item.name}`;
  itemId.textContent = `ID: ${item.id}`;
  itemCost.textContent = `Cost: ${item.cost || "N/A"}`;

  // Update item image
  itemImg.src = item.sprites?.default || "";
  itemImg.alt = item.name;

  // Populate attributes list
  attributeList.innerHTML = ""; // Clear any existing attributes
  item.attributes.forEach((attribute) => {
    const li = document.createElement("li");
    li.textContent = attribute.name;
    attributeList.appendChild(li);
  });
}
