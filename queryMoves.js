const rootUrl = "https://pokeapi.co/api/v2/pokemon";  // This is correct; it queries the Pokémon endpoint
const pokeSearch = document.getElementById("pokeSearch");
const defaultCardHtml = document.getElementById("pokeCard").innerHTML;

async function queryPokemon() {
    const pokeSearchName = pokeSearch.value.trim().toLowerCase(); // Make sure the search input is in lowercase
    if (!pokeSearchName) {
        alert("Please enter a Pokémon name!");
        return;
    }

    try {
        console.log(`Searching for Pokémon: ${pokeSearchName}`);  // Debugging line
        const response = await fetch(`${rootUrl}/${pokeSearchName}`);
        
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }

        const pokemon = await response.json();
        updateCard(pokemon); 
    } catch (error) {
        console.error(error); // Logs the error message for debugging
        alert("Failed to fetch Pokémon data. Please check the name and try again.");
    }
}

function updateCard(pokemon) {
    const { name, moves } = pokemon;
    const card = document.getElementById("pokeCard");
    card.innerHTML = defaultCardHtml; // Reset the card to default content

    document.getElementById("pokeName").textContent = `Pokémon Name: ${name.charAt(0).toUpperCase() + name.slice(1)}`;

    fetchMoves(moves);
}

async function fetchMoves(moves) {
    const moveList = document.getElementById("moveList");
    moveList.innerHTML = '';  // Clear previous move list

    const moveData = await Promise.all(moves.slice(0, 10).map(async move => {
        const moveResponse = await fetch(move.move.url);
        const moveJson = await moveResponse.json();
        return `<li>${moveJson.name.charAt(0).toUpperCase() + moveJson.name.slice(1)}</li>`;
    }));

    moveList.innerHTML = moveData.join(''); // Display the list of moves
}
