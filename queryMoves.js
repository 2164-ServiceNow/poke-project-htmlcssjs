const rootUrlMoves = "https://pokeapi.co/api/v2/move"

const pokeSearchMoves = document.getElementById("pokeSearchMoves")

const defaultMovesCard = document.getElementById("pokeMovesCard")
const defaultMovesCardHtml = document.getElementById("pokeMovesCard").innerHTML

async function queryMoves(){

    let pokeSearchMoveValue = pokeSearchMoves.value

    // // AJAX Way (Asynchronous JS & XML) 
    // // Ready States - 4 different ready states to the AJAX api request

    // // Ready State 0
    // let request = new XMLHttpRequest()

    // // Ready State 1, where we call the request to the server
    // request.open("GET", `${rootUrlMoves}/${pokeSearchMoveValue}`, true)

    // // Ready State 2 (Ready State 3 is when the send request is responsed too by the API)
    // request.send()

    // // Ready State 4 - request & response has successfully conclude
    // request.onreadystatechange = () =>{
    //     if(request.readyState === 4 && request.status === 200) {
    //         console.log(JSON.parse(request.responseText))
    //     }
    // }

    // // fetch API to request information from an API, it assumes asynchronous
    // fetch(`${rootUrlMoves}/${pokeSearchMoveValue}`) // returns a Promise which is a class the will either return
    // .then((response) => response.json())
    // .then((move) => {
    //     console.log(move)
    //     updateMovesCard(move)
    // })
    // .catch((error) =>{
    //     console.error(error)
    // })
    // .finally(() => {
    //     console.log("fetch has concluded")
    // })

    // Async Await variation - NOTE there are 2 keywords 'async' and 'await', the 'async' is tied to your FUNCTION
    // 'await' keyword is used for ANY function that returns a promise
    // ECMAScript 6 introduced async await
    try{
        const response = await fetch(`${rootUrlMoves}/${pokeSearchMoveValue}`) 
        const move = await response.json() 
        console.log(move)
        
        updateMovesCard(move)
    } catch (error){
        console.error(error)
    } finally {
        console.log("fetch has concluded")
    }

}

function updateMovesCard(move){
    defaultMovesCard.innerHTML = defaultMovesCardHtml

    const moveName = document.getElementById("moveName")
    const damageType = document.getElementById("damageType")
    const moveDescriptionList = document.getElementById("moveDescriptionList")
    const power = document.getElementById("power")
    
    moveName.textContent += `${move.name}`
    damageType.textContent += `${move.damage_class.name}`
    power.textContent += `${move.power}`

    let moveDescriptionArray = move.effect_entries

    for(let i = 0; i < moveDescriptionArray.length; i++){
        moveDescriptionList.innerHTML += `<li>${moveDescriptionArray[i].short_effect}</li>`
    }

}