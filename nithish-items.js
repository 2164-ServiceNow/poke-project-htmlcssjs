const rootUrl = "https://pokeapi.co/api/v2/pokemon"
// 
//  // be mindful of the / at the end, either exclude and put in string literal down below or include & leave out of string literal

const itemsUrl="https://pokeapi.co/api/v2/item"

let boolSwitch = false



const itemSearch = document.getElementById("itemSearch")

const defaultCard = document.getElementById("itemCard")
const defaultCardHtml = document.getElementById("itemCard").innerHTML


// async keyword to mark entire function as asynchronous
// async function queryPokemon(){
//     let pokeSearchName = pokeSearch.value

//     // // AJAX Way (Asynchronous JS & XML) 
//     // // Ready States - 4 different ready states to the AJAX api request

//     // // Ready State 0
//      //let request = new XMLHttpRequest()

//     // // Ready State 1, where we call the request to the server
//     // request.open("GET", `${rootUrl}/${pokeSearchName}`, true)

//     // // Ready State 2 (Ready State 3 is when the send request is responsed too by the API)
//     // request.send()

//     // // Ready State 4 - request & response has successfully conclude
//     // request.onreadystatechange = () =>{
//     //     if(request.readyState === 4 && request.status === 200) {
//     //         console.log(JSON.parse(request.responseText))
//     //     }
//     // }

//     // fetch API to request information from an API, it assumes asynchronous
//     // fetch(`${rootUrl}/${pokeSearchName}`) // returns a Promise which is a class the will either return
//     //     .then((response) => response.json())
//     //     .then((pokemon) => {
//     //         console.log(pokemon)
//     //     })
//     //     .catch((error) =>{
//     //         console.error(error)
//     //     })
//     //     .finally(() => {
//     //         console.log("fetch has concluded")
//     //     })

//     // Async Await variation - NOTE there are 2 keywords 'async' and 'await', the 'async' is tied to your FUNCTION
//     // 'await' keyword is used for ANY function that returns a promise
//     // ECMAScript 6 introduced async await
//     try{
//         const response = await fetch(`${rootUrl}/${pokeSearchName}`) // awaiting promise from Fetch
//         const pokemon = await response.json() // awaiting parsing of JSON information
//         // after this point we have stopped external interaction
//         console.log(pokemon)
//         /* 2 options:
//             1. Include logic within the try block
//             2. Create a seperate function and call it here
//         */
//         updateCard(pokemon)
//     } catch (error){
//         console.error(error)
//     } finally {
//         console.log("fetch has concluded")
//     }

// }


async function queryItem(){
    let itemSearchName= itemSearch.value
    // // Ready State 0
     let request = new XMLHttpRequest()

    // // Ready State 1, where we call the request to the server
    request.open("GET", `${itemsUrl}/${itemSearchName}`, true)

    // // Ready State 2 (Ready State 3 is when the send request is responsed too by the API)
    request.send()

    // // Ready State 4 - request & response has successfully conclude
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200) {
            const item = JSON.parse(request.responseText)
            console.log(item)
            updateitemCard(item)
        }
    }

}



// be mindful, pokemon is JUST the variable name and has ABSOLUTELY NO TYPE RESTRICTION
function updateitemCard(item){
    console.log("hello")
    console.log(item)
    // ALWAYS revert to default card
    defaultCard.innerHTML = defaultCardHtml

    // Grab all elements we want to replace with information from pokeapi
    const itemName = document.getElementById("itemName")
    const itemCost = document.getElementById("itemCost")
    const itemflingpower = document.getElementById("itemflingpower")
    // const abilityList = document.getElementById("abilityList")
    

    // replace information
    itemName.textContent += `${item.name}`
    itemCost.textContent += `${item.cost}`
    itemflingpower.textContent += `${item.fling_power}`
    // abilityList.textContent += `${item.attributes}`

    // how to replace abilities???!
    let pokeAbilityArray = item.attributes

    for(let i = 0; i < pokeAbilityArray.length; i++){
        itemabilityList.innerHTML += `<li>${pokeAbilityArray[i].name}</li>`
    }

    let itemflavorArray = item.flavor_text_entries

    for(let i = 0; i < 4; i++){
        itemflavortexts.innerHTML += `<li>${itemflavorArray[i].text}</li>`
    }
}