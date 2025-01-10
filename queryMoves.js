const rootURL = "https://pokeapi.co/api/v2/pokemon/";

const pokeInput = document.getElementById("pokeSearch");
const submitButton = document.getElementById("btn");
const picture = document.getElementById("picture");
const moveList = document.getElementById("moveList");
const newMovesButton = document.getElementById("newMoves");
const movesDiv = document.getElementById("moves");
const itemDiv = document.getElementById("items");
const itemNameh3 = document.getElementById("itemName");
const itemParagraph = document.getElementById("itemDescription");
const audio = document.getElementById("cry");
const additionalInfo = document.getElementById("additionalInfo");
const categoryh3 = document.getElementById("itemCategory");
const description = document.getElementById("itemDescription");
let moves = [];

submitButton.addEventListener("click", async (e) => {
  e.preventDefault;
  const pokeData = await fetchPokemon();
  // console.log(pokeData);
  moves = pokeData.moves;
  moveList.innerHTML = "";
  picture.setAttribute("src", pokeData.sprites.front_default);
  picture.style.height = "200px";
  audio.setAttribute("src", pokeData.cries.latest);
  audio.play();
  if (moves.length > 10) {
    for (let i = 0; i < 10; i++) {
      let li = document.createElement("li");
      li.innerText = moves[i].move.name;
      moveList.appendChild(li);
    }
  } else {
    for (let i = 0; i < moves.length; i++) {
      let li = document.createElement("li");
      li.innerText = moves[i].move.name;
      moveList.appendChild(li);
    }
  }
  itemDiv.style.visibility = "hidden";
  if (pokeData.held_items.length > 0) {
    itemNameh3.innerText = pokeData.held_items[0].item.name;
    const itemData = await fetchItem(pokeData.held_items[0].item.url);
    if (itemData.category.name) {
      categoryh3.innerText = itemData.category.name;
    }
    if (itemData.effect_entries.length > 0) {
      description.innerText = itemData.effect_entries[0].effect;
    }
    itemDiv.style.visibility = "visible";
  }
  additionalInfo.style.visibility = "visible";
});

const fetchPokemon = async () => {
  try {
    const response = await fetch(`${rootURL}${pokeInput.value}`);
    const pokeData = await response.json();
    return pokeData;
  } catch (error) {
    console.log("error fetching pokedata", error);
    alert(
      "That is not a valid pokemon name. Try again or use an id from 1-151 "
    );
  }
};

const fetchItem = async (itemUrl) => {
  try {
    const response = await fetch(itemUrl);
    const itemData = response.json();
    return itemData;
  } catch (error) {
    console.log("error fetching item", error);
  }
};

newMovesButton.addEventListener("click", () => {
  let listLength = moves.length;
  let currentMoves = [];
  if (listLength > 10) {
    while (currentMoves.length < 10) {
      currMove = moves[Math.floor(Math.random() * moves.length)].move.name;
      if (!currentMoves.includes(currMove)) {
        currentMoves.push(currMove);
      }
    }
    moveList.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      let li = document.createElement("li");
      li.innerText = currentMoves[i];
      moveList.appendChild(li);
    }
  } else {
    alert(`this is all the moves that your pokemon can do!`);
  }
});

//AJAX
// submitButton.addEventListener("click", () => {
//   let request = new XMLHttpRequest();
//   request.open("GET", `${rootUrl}/${pokeSearch.value}`, true);
//   request.send();
//   request.onreadystatechange = () => {
//     if (request.readyState === 4 && request.status === 200) {
//       console.log(JSON.parse(request.responseText));
//       console.log("ajax");
//     }
//   };
// });

//Promises
// submitButton.addEventListener("click", () => {
//   fetch(`${rootURL}${pokeInput.value}`)
//     .then((response) => {
//      return  response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log("promise")
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
//     .finally(()=>{
//       console.log("finally works")
//     })
// });
