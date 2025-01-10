// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => { 
//    if(!response.ok){
//     throw new Error("Could not fetch error")
//    }
//    return response.json()
// })
// .then(data =>console.log(data))
// .catch(error =>console.error(error))
// fetchData();

async function fetchData() {

  try{
    const pokemonName= document.getElementById("PokemonName").value.toLowerCase();
    console.log(pokemonName)
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if(!response.ok){
      throw new Error("Could  not fetch data")

    }

    const data= await response.json()
    const pokemonSprite=data.sprites.front_default; 
    const imgElement= document.getElementById("pokemonspite");
    imgElement.src=pokemonSprite;
    imgElement.style.display="block";


    console.log(data)



  }
  catch{
    console.error(error);
    

  }
  
}