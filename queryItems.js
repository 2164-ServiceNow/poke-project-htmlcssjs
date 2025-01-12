const rootUrl = "https://pokeapi.co/api/v2/item";

let boolSwitch = false;

const itemSearch = document.getElementById("itemSearch");

const defaultCard = document.getElementById("itemCard");

// Storing the original card HTML for resetting later.
const defaultCardHtml = document.getElementById("itemCard").innerHTML;

async function queryItem() {
    let itemSearchName = itemSearch.value.trim();  // Use itemSearch.value to get the input value

    if (!itemSearchName) {
        alert("Please enter an item name.");
        return;
    }

    try {
        const response = await fetch(`${rootUrl}/${itemSearchName}`);
        
        if (!response.ok) {
            throw new Error("Item not found.");
        }

        const items = await response.json();

        console.log(items);

        updateCard(items);
    } catch (error) {
        console.error(error);
        alert(error.message);  // Show error message if the item isn't found
    } finally {
        console.log("Fetch has concluded.");
    }
}

function updateCard(items) {
    // Reset the card content back to its original state
    defaultCard.innerHTML = defaultCardHtml;

    // Get the elements for the various fields
    const itemId = document.getElementById("ID");
    const itemName = document.getElementById("Name");
    const itemCost = document.getElementById("Cost");

    // Update the card with the fetched item details
    itemId.textContent = `ID: ${items.id}`;
    itemName.textContent = `Name: ${items.name}`;
    itemCost.textContent = `Cost: ${items.cost || "Not available"}`;

    // Handle attributes if they exist
    const itemAttributes = items.attributes || [];  // Default to empty array if no attributes are found

    const attributeList = document.getElementById("attributeList");
    
    // Clear any previous attributes
    attributeList.innerHTML = '';

    // Add each attribute to the list
    itemAttributes.forEach(attribute => {
        const li = document.createElement("li");
        li.textContent = attribute.name;
        attributeList.appendChild(li);
    });
}
