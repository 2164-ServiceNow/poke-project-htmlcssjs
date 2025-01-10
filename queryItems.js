const itemRootUrl = "https://pokeapi.co/api/v2/item";
const itemSearch = document.getElementById("itemSearch");

async function queryItem() {
  const itemSearchName = itemSearch.value.trim();

  if (!itemSearchName) {
    alert("Please enter an item name!");
    return;
  }

  //AJAX method
  // let request = new XMLHttpRequest;
  // request.open("GET", `${itemRootUrl}/${pokeSearchItem}`, true);
  // console.log(`${itemRootUrl}/${pokeSearchItem}`);
  // request.send();
  // request.onreadystatechange = () => {
  //     if(request.readyState === 4 && request.status === 200) {
  //         console.log(JSON.parse(request.responseText));
  //     }
  // };

  //fetch API
  // fetch(`${itemRootUrl}/${pokeSearchItem}`)
  //     .then((response) => response.json())
  //     .then((item) => {
  //         console.log(item);
  //     })
  //     .catch((error) => {
  //         console.error(error);
  //     })
  //     .finally(() => {
  //         console.log("fetch concluded")
  //     });

  // Async/await
  try {
    const response = await fetch(
      `${itemRootUrl}/${itemSearchName.toLowerCase()}`
    );
    if (!response.ok) {
      throw new Error("Item not found");
    }

    const item = await response.json();
    updateItemCard(item);
  } catch (error) {
    console.error(error.message);
    alert("Error fetching item data: " + error.message);
  }
}

function updateItemCard(item) {
  const itemName = document.getElementById("itemName");
  const itemId = document.getElementById("itemId");
  const itemCost = document.getElementById("itemCost");
  const attributeList = document.getElementById("attributeList");
  const itemImg = document.getElementById("itemImg");

  // Populate item details
  itemName.textContent = `Item Name: ${item.name}`;
  itemId.textContent = `ID: ${item.id}`;
  itemCost.textContent = `Cost: ${item.cost || "N/A"}`;

  // Display item image
  itemImg.src = item.sprites?.default || "";

  // Populate attributes list
  attributeList.innerHTML = "";
  item.attributes.forEach((attribute) => {
    const li = document.createElement("li");
    li.textContent = attribute.name;
    attributeList.appendChild(li);
  });
}
