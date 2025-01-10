const rooturl="https://pokeapi.co/api/v2/move";

const pokeMoveSearch=document.getElementById("pokeMoveSearch");
const pokeMove=document.getElementById("pokeMove");
const pokeNames=document.getElementById("names");

const defaultcard = document.getElementById("pokeCard");
const defaultcardHtml = document.getElementById("pokeCard").innerHTML;

async function PokemonMove(){

    let pokeMoveName=pokeMoveSearch.value;
    // console.log(pokeMoveName);
    try{
        const response=await fetch(`${rooturl}/${pokeMoveName}`)
        const poke=await response.json();
        //console.log(poke.names);
        cardUpdate(poke);

    }catch(error)
    {
         console.error(error);
    }finally{
        console.log("fetch successful.");
    }
}

function cardUpdate(poke){

    const pokeMove=document.getElementById("pokeMove");
    const pokeNames=document.getElementById("names");

    defaultcard.innerHTML=defaultcardHtml;
    pokeMove.textContent+=`${poke.name}`;
    let pokeNamesArray=poke.names;

    for(let i=0;i<pokeNamesArray.length;i++)
    {
        pokeNames.innerHTML+=`<li>${pokeNamesArray[i].language.name}</li>`
    }
    
}