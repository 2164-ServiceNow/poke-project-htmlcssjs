itemRootUrl = "https://pokeapi.co/api/v2/item"

const itemSearch = document.getElementById("itemSearch");

async function queryItem() {
    let pokeSearchItem = itemSearch.value;

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
    //     .then((promise) => promise.json())
    //     .then((item) => {
    //         console.log(item);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     })
    //     .finally(() => {
    //         console.log("fetch concluded")
    //     });

    //Async Await
    try {
        const response = await fetch(`${itemRootUrl}/${pokeSearchItem}`);
        const item = await response.json();
        console.log(item);
        updateItemCard(item);
    } catch(error) {
        console.error(error);
    } finally {
        console.log("concluded");
    }
}

function updateItemCard(item) {
    const itemName = document.getElementById("itemName");
    const itemId = document.getElementById("itemId");
    const itemCost = document.getElementById("itemCost");
    const attributeList = document.getElementById("attributeList");
    const itemImg = document.getElementById("itemImg");

    itemName.lastChild.textContent = `${item.name}`;
    itemId.lastChild.textContent = `${item.id}`;
    itemCost.lastChild.textContent = `${item.cost}`;
    if (item.sprites.default) {
        itemImg.src = `${item.sprites.default}`;
    }

    attributeList.innerHTML = "";
    console.log(item.attributes.length);
    
    for(let i in item.attributes) {
        attributeList.innerHTML += '<li>' + item.attributes[i].name + '</li>';
    }
    if(item.attributes.length === 0) {
        attributeList.innerHTML = "N/A";
    }
    // gameList.innerHTML = "";
    // gameList.innerHTML = item.game_indices;
    // console.log(item.game_indices);
    // for(i in gameList) {
    //     gameList.innerHTML += item.[i];
    // }
}