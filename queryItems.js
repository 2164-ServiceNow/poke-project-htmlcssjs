const itemBaseUrl = "https://pokeapi.co/api/v2/item";

async function queryItems() {
    const itemSearch = document.getElementById("itemSearch");
    const itemName = itemSearch.value.trim().toLowerCase(); // Get the input value
    const itemCard = document.getElementById("itemCard");
    const defaultItemHtml = itemCard.innerHTML; // Save the default HTML

    // Revert the card to its default state
    itemCard.innerHTML = defaultItemHtml;


     // let request = new XMLHttpRequest()
    // request.open("GET", `${baseUrl}/${pokeItemNum}`, true)
    // request.send()

    // request.onreadystatechange = () =>{
    //     if(request.readyState === 4 && request.status === 200) {
    //         console.log(JSON.parse(request.responseText))
    //     }
    // }

//Fetch
// fetch(`${baseUrl}/${pokeItemNum}`) 
// .then((response) => response.json())
// .then((pokemon) => {
//     console.log(pokemon)
// })
// .catch((error) =>{
//     console.error(error)
// })
// .finally(() => {
//     console.log("fetch has concluded")
// })

    try {
        const response = await fetch(`${itemBaseUrl}/${itemName}`);
        if (!response.ok) {
            throw new Error("Item not found");
        }
        const itemData = await response.json();
        updateItemCard(itemData);
    } catch (error) {
        console.error(error);
        alert("Item not found. Please try another item.");
    }

}

function updateItemCard(itemData) {
    const itemName = document.getElementById("itemName");
    const itemCategory = document.getElementById("itemCategory");
    const itemCost = document.getElementById("itemCost");
    const attributesList = document.getElementById("attributesList");
    const itemEffect = document.getElementById("itemEffect");
    const itemShortEffect = document.getElementById("itemShortEffect");
    const itemFlavorTexts = document.getElementById("itemFlavorTexts");

    // Update the card details with item data
    itemName.textContent += itemData.name;
    itemCategory.textContent += itemData.category.name;
    itemCost.textContent += `${itemData.cost} Pokécoins`;

    attributesList.innerHTML = ""; // Clear the list first
    itemData.attributes.forEach((attr) => {
        attributesList.innerHTML += `<li>${attr.name}</li>`;
    });

    const effects = itemData.effect_entries[0];
    if (effects) {
        itemEffect.textContent = effects.effect;
        itemShortEffect.textContent = effects.short_effect;
    }

    itemFlavorTexts.innerHTML = ""; // Clear flavor texts
    const flavorTexts = itemData.flavor_text_entries.slice(0, 2); // Display only 2 entries
    flavorTexts.forEach((entry) => {
        itemFlavorTexts.innerHTML += `<strong>${entry.version_group.name}:</strong> ${entry.text}<br>`;
    });
}
