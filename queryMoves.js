// This will be the js for displaying items for the user story

const rootURL = "https://pokeapi.co/api/v2/move"

const moveList = document.getElementById("moveList")
const startingCard = document.getElementById("moveCard")

const startingCardHTML = startingCard.innerHTML



async function queryMoves(){
    let moveListSearch = moveList.value

    // let request = new XMLHttpRequest()

    // request.open("GET", `${rootURL}/${moveListSearch}`, true)

    // request.send()
    // request.onreadystatechange = () =>{
    //     if(request.readyState === 4 && request.status === 200){
    //         console.log(JSON.parse(request.responseText))
    //     }
    // }

    // fetch(`${rootURL}/${moveListSearch}`)
    // .then((response) => response.json())
    // .then((moves) =>{
    //     console.log(moves)
    // })
    // .catch((error) =>{
    //     console.error(error)
    // })
    // .finally(() => {

    // })

    try{
        const response = await fetch(`${rootURL}/${moveListSearch}`)
        const moves = await response.json()
        console.log(moves)

        updateMove(moves)
    }
    catch(error){
        console.error(error)
    }
    finally{

    }
}
function updateMove(moves){
    startingCard.innerHTML = startingCardHTML
    const moveName = document.getElementById('moveName')
    const moveAccuracy = document.getElementById("moveAccuracy")
    const contestCombos = document.getElementById('contestCombos')

    moveName.textContent += `${moves.name}`
    moveAccuracy.textContent += `${moves.accuracy}`

    let combosArray = moves.contest_combos.normal.use_before
    
    for(let i =0; i < combosArray.length; i++){
        contestCombos.innerHTML += `<li>${combosArray[i].name}</li>`
    }

}