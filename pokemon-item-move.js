const itemsurl="https://pokeapi.co/api/v2/item/"
const moveurl="https://pokeapi.co/api/v2/move/"

// itemSearch();
async function itemSearch() {


  // // AJAX Way (Asynchronous JS & XML)
  // // Ready States - 4 different ready states to the AJAX api request

  // // Ready State 0
  // let request = new XMLHttpRequest()
  // const pokeItem=document.getElementById("pokeItem").value.toLowerCase();

  // // Ready State 1, where we call the request to the server
  // request.open("GET", `${itemsurl}/${pokeItem}`, true)

  // // Ready State 2 (Ready State 3 is when the send request is responsed too by the API)
  // request.send()

  // // Ready State 4 - request & response has successfully conclude
  // request.onreadystatechange = () =>{
  //     if(request.readyState === 4 && request.status === 200) {
  //         console.log(JSON.parse(request.responseText))
  //     }
  // }

  // fetch API to request information from an API, it assumes asynchronous
  //const pokeItem=document.getElementById("name");
  // fetch(`${itemsurl}${pokeItem}`) // returns a Promise which is a class the will either return
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
  const pokeItem="master-ball"
  console.log("hello")
  const response= await fetch(`${itemsurl}${pokeItem}`);
  console.log(response)
  const data=await response.json();
  const name=document.getElementById("name");
  const flavour_text=document.getElementById("flavour_text");
  // const flavour_text1=document.getElementById("flavour_text1");
  const imgElement= document.getElementById("pokemonspite");
  const pokemonSprite=data.sprites.default; 
  let style = `<span style="font-weight: bold; color: darkred;">`;
  name.innerHTML+= `${style}${data.name }</span>`;
  flavour_text.innerHTML += `${style}${data.flavor_text_entries[0].text }</span>`;
  // flavour_text1.innerHTML += `${style}${data.flavor_text_entries[8].text }</span>`;

    imgElement.src=pokemonSprite;
    imgElement.style.display="block";

    let pokeAbilityArray = data.attributes;

  for (let i = 0; i < pokeAbilityArray.length; i++) {
    abilityList.innerHTML += `<li style="font-weight: bold; color: darkred;">${pokeAbilityArray[i].name}</li>`;
  }

  console.log(data)

 }catch{

  console.error(error);
 }
  
} 