const moveRootUrl = "https://pokeapi.co/api/v2/move";

const moveSearch = document.getElementById("pokeMoveSearch");

// const defaultCard = document.getElementById("pokeMoveCard");

// const defaultCardHtml = document.getElementById("pokeMoveCard").innerHTML;

const moveCard = document.getElementById("moveCard");
const moveCardHtml = document.getElementById("moveCard").innerHTML;

async function getMoves() {
  let moveSearchName = moveSearch.value;

  // let request = new XMLHttpRequest();
  // request.open("GET", `${moveRootUrl}/${moveSearchName}/`, true);
  // request.send();

  // request.onreadystatechange = () => {
  //   if (request.readyState === 4 && request.status === 200) {
  //     console.log(JSON.parse(request.responseText));
  //   }
  // };

  // fetch API to request information from an API, it assumes asynchronous

  // fetch(`${moveRootUrl}/${moveSearchName}`) // returns a Promise which is a class the will either return
  //   .then((response) => response.json())
  //   .then((pokeMove) => {
  //     console.log(pokeMove);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   })
  //   .finally(() => {
  //     console.log("fetch has concluded");
  //   });

  try {
    const response = await fetch(`${moveRootUrl}/${moveSearchName}`); // awaiting promise from Fetch
    const move = await response.json(); // awaiting parsing of JSON information
    // after this point we have stopped external interaction
    console.log(move);
    /* 2 options:
              1. Include logic within the try block
              2. Create a seperate function and call it here
          */
    updateMoveCard(move);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("fetch has concluded");
  }
}

// be mindful, pokemon is JUST the variable name and has ABSOLUTELY NO TYPE RESTRICTION
function updateMoveCard(move) {
  // ALWAYS revert to default card
  moveCard.innerHTML = moveCardHtml;

  // Grab all elements we want to replace with information from pokeapi

  const moveName = document.getElementById("moveName");
  const moveAccuracy = document.getElementById("moveAccuracy");
  const moveGeneration = document.getElementById("generation");
  const movePower = document.getElementById("power");

  const movePp = document.getElementById("pp");
  const movepriority = document.getElementById("priority");
  const moveDamageClass = document.getElementById("damageClass");
  // const movePower = document.getElementById("power");

  // const moveName = document.getElementById("moveName");
  // const moveAccuracy = document.getElementById("moveAccuracy");

  let style = `<span style="font-weight: bold; color: darkred;">`;

  // Replace information with styled text
  moveName.innerHTML += `${style}${move.name}</span>`;
  moveAccuracy.innerHTML += `${style}${move.accuracy}</span>`;
  moveGeneration.innerHTML += `${style}${move.generation.name}</span>`;
  movePower.innerHTML += `${style}${move.power}</span>`;
  movePp.innerHTML += `${style}${move.pp}</span>`;
  movepriority.innerHTML += `${style}${move.priority}</span>`;
  moveDamageClass.innerHTML += `${style}${move.damage_class.name}</span>`;

  let effectsArray = move.effect_entries;
  for (let i = 0; i < effectsArray.length; i++) {
    effectList.innerHTML += `<li style="font-weight: bold; color: darkred;">${effectsArray[i].effect}</li>`;
  }

  // how to replace abilities???!
  // let pokeAbilityArray = pokemon.abilities;

  // for (let i = 0; i < pokeAbilityArray.length; i++) {
  //   abilityList.innerHTML += `<li>${pokeAbilityArray[i].ability.name}</li>`;
  // }

  // Example to test dynamic nature of our abilities list
  // let longArray = ["1","2","3","4","5","6","7","8",]
  // for(let i = 0; i < longArray.length; i++){
  //     abilityList.innerHTML += `<li>${longArray[i]}</li>`
  // }
}
