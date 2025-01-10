const itemUrl = "https://pokeapi.co/api/v2/item";


function queryItem()
{
    POKECARDBODY.innerHTML = `
        <h5 id="itemName" class="card-title">Item Name: </h5>
        <img id="itemSprite"/>
        <h6 id="itemID" class="card-subtitle mb-2 text-body-secondary">ID: </h6>
        <h6 id="itemCategory" class="card-subtitle mb-2 text-body-secondary">Category: </h6>
        <h6 id="itemCost" class="card-subtitle mb-2 text-body-secondary">Cost: </h6>
        <label class="card-subtitle text-body-secondary" for="effectsList">Effects:</label>
        <ul id="effectsList"></ul>
        <label class="card-subtitle text-body-secondary" for="attributesList">Attributes:</label>
        <ul id="attributesList"></ul>
    `

    // Fetch API with .then()
    let pokeSearchValue = document.getElementById("pokeSearch").value;
    fetch(`${itemUrl}/${pokeSearchValue}`).then(response => {
        if(response.ok)
        {
            response.json().then(content => {
                updateCardItem(content);
            });
        }
        else
        {
            alertNotification("Item not found.");
        }
    });
}

function updateCardItem(item)
{
    // Set information
    const ITEMNAME = document.getElementById("itemName");
    const ITEMSPRITE = document.getElementById("itemSprite");
    const ITEMID = document.getElementById("itemID");
    const ITEMCATEGORY = document.getElementById("itemCategory");
    const ITEMCOST = document.getElementById("itemCost");
    const EFFECTSLIST = document.getElementById("effectsList");
    const ATTRIBUTESLIST = document.getElementById("attributesList");

    ITEMNAME.innerHTML += `<span>${item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>`;
    ITEMSPRITE.src = item.sprites.default;
    ITEMID.innerHTML += `${item.id}`
    ITEMCATEGORY.innerHTML += `<span>${item.category.name.charAt(0).toUpperCase() + item.category.name.slice(1)}</span>`;
    ITEMCOST.innerHTML += `${item.cost}`
    item.effect_entries.forEach(effect => {
        EFFECTSLIST.innerHTML += `<li>${effect.short_effect.charAt(0).toUpperCase() + effect.short_effect.slice(1)}</li>`;
    });
    item.attributes.forEach(attribute => {
        ATTRIBUTESLIST.innerHTML += `<li>${attribute.name.charAt(0).toUpperCase() + attribute.name.slice(1)}</li>`;
    });

    // Empty lists will say "None"
    Array.from(POKECARDBODY.getElementsByTagName("ul")).forEach(list => {
        if(list.innerHTML == "")
        {
            list.innerHTML = `<li>None</li>`;
        }
    });
}