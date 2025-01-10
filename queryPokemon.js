const rootUrl = "https://pokeapi.co/api/v2/pokemon" // be mindful of the / at the end, either exclude and put in string literal down below or include & leave out of string literal

let boolSwitch = false

const pokeSearch = document.getElementById("pokeSearch")

const defaultCard = document.getElementById("pokeCard")
const defaultCardHtml = document.getElementById("pokeCard").innerHTML


// async keyword to mark entire function as asynchronous
async function queryPokemon(){
    let pokeSearchName = pokeSearch.value

    // // AJAX Way (Asynchronous JS & XML) 
    // // Ready States - 4 different ready states to the AJAX api request

    // // Ready State 0
    // let request = new XMLHttpRequest()

    // // Ready State 1, where we call the request to the server
    // request.open("GET", `${rootUrl}/${pokeSearchName}`, true)

    // // Ready State 2 (Ready State 3 is when the send request is responsed too by the API)
    // request.send()

    // // Ready State 4 - request & response has successfully conclude
    // request.onreadystatechange = () =>{
    //     if(request.readyState === 4 && request.status === 200) {
    //         console.log(JSON.parse(request.responseText))
    //     }
    // }

    // fetch API to request information from an API, it assumes asynchronous
    // fetch(`${rootUrl}/${pokeSearchName}`) // returns a Promise which is a class the will either return
    //     .then((response) => response.json())
    //     .then((pokemon) => {
    //         console.log(pokemon)
    //     })
    //     .catch((error) =>{
    //         console.error(error)
    //     })
    //     .finally(() => {
    //         console.log("fetch has concluded")
    //     })

    // Async Await variation - NOTE there are 2 keywords 'async' and 'await', the 'async' is tied to your FUNCTION
    // 'await' keyword is used for ANY function that returns a promise
    // ECMAScript 6 introduced async await
    try{
        const response = await fetch(`${rootUrl}/${pokeSearchName}`) // awaiting promise from Fetch
        const pokemon = await response.json() // awaiting parsing of JSON information
        // after this point we have stopped external interaction
        console.log(pokemon)
        /* 2 options:
            1. Include logic within the try block
            2. Create a seperate function and call it here
        */
        updateCard(pokemon)
    } catch (error){
        console.error(error)
    } finally {
        console.log("fetch has concluded")
    }

}

// be mindful, pokemon is JUST the variable name and has ABSOLUTELY NO TYPE RESTRICTION
function updateCard(pokemon){
    // ALWAYS revert to default card
    defaultCard.innerHTML = defaultCardHtml

    // Grab all elements we want to replace with information from pokeapi
    const pokeName = document.getElementById("pokeName")
    const pokeWeight = document.getElementById("pokeWeight")
    const abilityList = document.getElementById("abilityList")
    const pokeHeight = document.getElementById("pokeHeight")

    // replace information
    pokeName.textContent += `${pokemon.name}`
    pokeHeight.textContent += `${pokemon.height}`
    pokeWeight.textContent += `${pokemon.weight}`

    // how to replace abilities???!
    let pokeAbilityArray = pokemon.abilities

    for(let i = 0; i < pokeAbilityArray.length; i++){
        abilityList.innerHTML += `<li>${pokeAbilityArray[i].ability.name}</li>`
    }
}