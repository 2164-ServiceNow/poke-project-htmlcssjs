const itemRootUrl = "https://pokeapi.co/api/v2/item"

const itemSearch = document.getElementById("itemSearch")

const itemDefaultCard = document.getElementById("itemCard")
const itemDefaultCardHtml = document.getElementById("itemCard").innerHTML

async function queryItem(){
    let itemSearchName = itemSearch.value.toLowerCase().replace(/\s+/g, '-')
    // // AJAX method through the class XMLHttpRequest
    // let request = new XMLHttpRequest()
    // request.open("GET", `${itemRootUrl}/${itemSearchName}`, true)
    // request.send()
    // request.onreadystatechange = () =>{
    //         if(request.readyState === 4 && request.status === 200) {
    //             console.log("AJAX method")
    //             console.log(JSON.parse(request.responseText))
    //         }
    //     }

    // // Fetch API with the fetch-then-catch syntax
    // fetch(`${itemRootUrl}/${itemSearchName}`)
    //     .then((response) => response.json())
    //     .then((item) => {
    //         console.log(item)
    //     })
    //     .catch((error) =>{
    //         console.error(error)
    //     })
    //     .finally(() => {
    //         console.log("Fetch API method: Fetch has concluded")
    //     })
    
    // Async/Await method
    try{
        const response = await fetch(`${itemRootUrl}/${itemSearchName}`)
        const item = await response.json()
        console.log(item)

        updateItemCard(item)
    } catch (error){
        console.error(error)
    } finally {
        console.log("Async/Await method: Fetch has concluded")
    }
}

function updateItemCard(item){
    itemDefaultCard.innerHTML = itemDefaultCardHtml

    // Grab all item-related elements we want to replace
    const itemName = document.getElementById("itemName")
    const itemCost = document.getElementById("itemCost")
    const itemCategory = document.getElementById("itemCategory")
    const itemEffect = document.getElementById("itemEffect")
    const itemSprite = document.getElementById("itemSprite")
    const itemFieldSprite = document.getElementById("selectedPokemonItem1")

    // replace item information
    itemName.textContent += `${item.name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }`
    itemCost.textContent += `${item.cost}`
    itemCategory.textContent += `${item.category.name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }`
    itemEffect.textContent += `${item.effect_entries[0].effect}`
    itemSprite.setAttribute("src", item.sprites.default)
    itemFieldSprite.setAttribute("src", item.sprites.default)
    itemFieldSprite.style.display = "block"
}