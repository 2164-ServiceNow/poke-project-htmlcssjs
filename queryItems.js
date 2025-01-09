const itemRootUrl = "https://pokeapi.co/api/v2/item/"

const itemSearch = document.getElementById("itemSearch")

const defaultItemCard = document.getElementById("itemCard")
const defaultItemCardHtml = document.getElementById("itemCard").innerHTML

async function queryItems(){
    let itemSearchName = itemSearch.value

    // AJAX Way (Asynchronous JS & XML) 
    // Ready State 0
    // let request = new XMLHttpRequest()

    // // Ready State 1, where we call the request to the server
    // request.open("GET", `${itemRootUrl}${itemSearchName}`, true)

    // // Ready State 2 (Ready State 3 is when the send request is responsed too by the API)
    // request.send()

    // // Ready State 4 - request & response has successfully conclude
    // request.onreadystatechange = () =>{
    //     if(request.readyState === 4 && request.status === 200) {
    //         console.log(JSON.parse(request.responseText))
    //     }
    // }

    // fetch API to request information from an API, it assumes asynchronous
    // fetch(`${itemRootUrl}${itemSearchName}`) // returns a Promise which is a class the will either return
    //     .then((response) => response.json())
    //     .then((item) => {  
    //         console.log(item)
    //     })
    //     .catch((error) =>{
    //         console.error(error)
    //     })
    
    // Async Await variation
    try{
        const response = await fetch(`${itemRootUrl}${itemSearchName}`) // awaiting promise from Fetch
        const item = await response.json() // awaiting parsing of JSON information
        // after this point we have stopped external interaction
        console.log(item)

        updateItemCard(item)
    } catch (error){
        console.error(error)
    }
    
}

function updateItemCard(item){
    defaultItemCard.innerHTML = defaultItemCardHtml

    const itemName = document.getElementById("itemName")
    const itemSprite = document.getElementById("itemSprite")
    const itemDescription = document.getElementById("itemDescription")
    const itemCost = document.getElementById("itemCost")
    const attributesList = document.getElementById("attributesList")
    const attributesLabel = document.getElementById("attributesLabel")

    let itemAttributesArray = item.attributes

    if(itemAttributesArray.length === 0){
        attributesLabel.textContent += "None"
    }
    for(let i = 0; i < itemAttributesArray.length; i++){
        attributesList.innerHTML += `<li>${itemAttributesArray[i].name}</li>`
    }

    itemName.textContent += `${item.name}`
    itemSprite.src = `${item.sprites.default}`
    itemSprite.style.height = "25%";
    itemSprite.style.width = "25%";
    itemDescription.textContent += `${item.effect_entries[0].effect}`
    itemCost.textContent += `${item.cost}`

}