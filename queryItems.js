const rootUrlItems = "https://pokeapi.co/api/v2/item"

const pokeSearchItems = document.getElementById("pokeSearchItems")

const defaultItemsCard = document.getElementById("pokeItemsCard")
const defaultItemsCardHtml = document.getElementById("pokeItemsCard").innerHTML



async function queryItems(){

    let pokeSearchItemValue = pokeSearchItems.value

    // Async Await variation - NOTE there are 2 keywords 'async' and 'await', the 'async' is tied to your FUNCTION
    // 'await' keyword is used for ANY function that returns a promise
    // ECMAScript 6 introduced async await
    try{
        const response = await fetch(`${rootUrlItems}/${pokeSearchItemValue}`) 
        const item = await response.json() 
        console.log(item)
        
        updateItemsCard(item)
    } catch (error){
        console.error(error)
    } finally {
        console.log("fetch has concluded")
    }

}

function updateItemsCard(item){
    defaultItemsCard.innerHTML = defaultItemsCardHtml

    const itemName = document.getElementById("itemName")
    const itemDescriptionList = document.getElementById("itemDescriptionList")
    const itemCost = document.getElementById("itemCost")
    const itemPic = document.getElementById("pokePic")
    
    itemName.textContent += `${item.name}`
    itemCost.textContent += `${item.cost}`
    itemPic.setAttribute("src", item.sprites.default)

    let itemDescriptionArray = item.effect_entries

    for(let i = 0; i < itemDescriptionArray.length; i++){
        itemDescriptionList.innerHTML += `<li>${itemDescriptionArray[i].short_effect}</li>`
    }

}
