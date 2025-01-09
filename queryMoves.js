const moveUrl = "https://pokeapi.co/api/v2/move/"
const moveSearch = document.getElementById("moveSearch")
const moveName = document.getElementById("moveName")
const moveAccuracy = document.getElementById("moveAccuracy")
const movePowerPoints = document.getElementById("movePowerPoints")
const movePriority = document.getElementById("movePriority")
const movePower = document.getElementById("movePower")
const movePokemonList = document.getElementById("movePokemonList")

async function queryMoves(){
    let moveSearchValue = moveSearch.value
    
    // //AJAX way
    // let request = new XMLHttpRequest() //ready state 0
    // request.open("GET", `${moveUrl}${moveSearchValue}`) //ready state 1
    // request.send() //ready state 2 and 3
    // request.onreadystatechange = () => {
    //     if(request.readyState == 4 && request.status ==200){
    //         console.log(JSON.parse(request.responseText))
    //     }
    // }

    // //fetch-then
    // fetch(`${moveUrl}${moveSearchValue}`)
    //     .then(response => response.json())
    //     .then(move => console.log(move))
    //     .catch(error => console.log(error))
    //     .finally(() => console.log("fetch is done"))
    
    try {
        const response = await fetch(`${moveUrl}${moveSearchValue}`)
        const move = await response.json()
        console.log(move)
        updateMoveInformation(move)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("fetch is done inside a try-catch block")
    }
}

function updateMoveInformation(move){
    const movePokemonArray = move.learned_by_pokemon

    moveName.textContent = `${move.name}`
    moveAccuracy.textContent = `${move.accuracy}`
    movePowerPoints.textContent = `${move.pp}`
    movePower.textContent = `${move.power}`
    movePriority.textContent = `${move.priority}`
    movePokemonList.textContent = ""
    for(let i=0; i<movePokemonArray.length && i<10; i++){
        movePokemonList.innerHTML+= `<li>${movePokemonArray[i].name}</li>`
    }
}