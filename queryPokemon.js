const rootUrl = "https://pokeapi.co/api/v2/pokemon" // be mindful of the / at the end, either exclude and put in string literal down below or include & leave out of string literal

const pokeName = document.getElementById("pokeName")
const pokeWeight = document.getElementById("pokeWeight")
const ability1 = document.getElementById("ability1")
const ability2 = document.getElementById("ability2")
const ability3 = document.getElementById("ability3")
const pokeHeight = document.getElementById("pokeHeight")
const pokeSearch = document.getElementById("pokeSearch")

function queryPokemon(){
    // AJAX Way (Asynchronous JS & XML) 
    // Ready States - 4 different ready states to the AJAX api request

    // Ready State 0
    let request = new XMLHttpRequest()

    // Ready State 1, where we call the request to the server
    let pokeSearchName = pokeSearch.value
    request.open("GET", `${rootUrl}/${pokeSearchName}`, true)

    // Ready State 2 (Ready State 3 is when the send request is responsed too by the API)
    request.send()

    // Ready State 4 - request & response has successfully conclude
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200) {
            console.log(JSON.parse(request.responseText))
        }
    }


}