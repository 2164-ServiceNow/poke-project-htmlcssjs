const rootURL = "https://pokeapi.co/api/v2/pokemon"; // Pokemon endpoint to get the names of all pokemon
const rootURL2 = "https://pokeapi.co/api/v2/move";  // Moves endpoint to get all the moves of pokemon

// Function to fetch move power from rootURL2 
async function getMovePower(moveName) {
    try {
        const response = await fetch(`${rootURL2}/${moveName}`); // awaiting promise from Fetch
        const moveData = await response.json(); // awaiting parsing of JSON information
        return moveData.power; 
    } catch (error) {
        console.error("Wait! Your pokemon is not ready for battle:", error);
    }
}

// Fetch and display player's Pokemon details
async function queryPlayerPokemon() {
    const playerPokeSearch = document.getElementById("playerPokeSearch").value;
    const playerPokeCard = document.getElementById("playerPokeCard");
    const playerPokeName = document.getElementById("playerPokeName");
    const playerAbilityList = document.getElementById("playerAbilityList");
    const playerMoveSelect = document.getElementById("playerMoveSelect");

    if (!playerPokeSearch) {
        alert("Fight between player is prohibited so select pokemon.");
        return;
    }

    try {
        const response = await fetch(`${rootURL}/${playerPokeSearch}`); // awaiting promise from Fetch
        const pokemon = await response.json(); // awaiting parsing of JSON information

        playerPokeName.textContent = `Player's Pokemon: ${pokemon.name}`;
        // Mapping through the abilities array of the pokemon object
        // and create an list element for each ability name.
        playerAbilityList.innerHTML = pokemon.abilities
            // For each ability, insert its name inside a list tag.
            .map((item) => `<li>${item.ability.name}</li>`)
            // At the end join all in single list
            .join("");

        // To list the move names and their power together. Used Promise.all to handle asynchronous fetching of move power for all moves
        const moves = await Promise.all(
            pokemon.moves.map(async (item) => {
                const moveName = item.move.name;
                const movePower = await getMovePower(moveName);
                return `<option value="${moveName}">${moveName} (Power: ${movePower > 0 ? movePower : 'Can not learn'})</option>`;
            })
        );
        playerMoveSelect.innerHTML = `<option value="">Select a move</option>` + moves.join("");
    } catch (error) {
        console.error("Pokemon not found:", error);
        alert("Hey!! What pokemon is that?????");
    }
}

// Fetch and display opponent's Pokemon details
async function queryOpponentPokemon() {
    const opponentPokeSearch = document.getElementById("opponentPokeSearch").value;
    const opponentPokeCard = document.getElementById("opponentPokeCard");
    const opponentPokeName = document.getElementById("opponentPokeName");
    const opponentAbilityList = document.getElementById("opponentAbilityList");
    const opponentMoveSelect = document.getElementById("opponentMoveSelect");

    if (!opponentPokeSearch) {
        alert("Fight between player is prohibited so select pokemon.");
        return;
    }

    try {
        const response = await fetch(`${rootURL}/${opponentPokeSearch}`); // awaiting promise from Fetch
        const pokemon = await response.json(); // awaiting parsing of JSON information

        opponentPokeName.textContent = `Opponent's Pokemon: ${pokemon.name}`; 
        // Mapping through the abilities array of the pokemon object
        // and create an list element for each ability name.
        opponentAbilityList.innerHTML = pokemon.abilities
            // For each ability, insert its name inside a list tag.
            .map((item) => `<li>${item.ability.name}</li>`)
            // At the end join all in single list
            .join("");

        // To list the move names and their power together. Used Promise.all to handle asynchronous fetching of move power for all moves
        const moves = await Promise.all(
            pokemon.moves.map(async (item) => {
                const moveName = item.move.name;
                const movePower = await getMovePower(moveName);
                return `<option value="${moveName}">${moveName} (Power: ${movePower > 0 ? movePower : 'Can not learn'})</option>`;
            })
        );
        opponentMoveSelect.innerHTML = `<option value="">Select a move</option>` + moves.join("");
    } catch (error) {
        console.error("Pokemon not found:", error);
        alert("Hey!! What pokemon is that?????");
    }
}

// Logic for the fight is here
async function fight() {
    const playerMove = document.getElementById("playerMoveSelect").value;
    const opponentMove = document.getElementById("opponentMoveSelect").value;

    if (!playerMove || !opponentMove) {
        alert("Both player and opponent must select a move to fight!");
        return;
    }

    try {
        const playerMovePower = await getMovePower(playerMove);
        const opponentMovePower = await getMovePower(opponentMove);

        const resultText = document.getElementById("resultText");
        const fightResult = document.getElementById("fightResult");
        fightResult.style.display = "block"; // This is used to display the result after calculation in html the display is given none

        if (playerMovePower > opponentMovePower) {
            resultText.textContent = `Player wins! ${playerMove} (Power: ${playerMovePower}) beats ${opponentMove} (Power: ${opponentMovePower}).`;
        } else if (opponentMovePower > playerMovePower) {
            resultText.textContent = `Opponent wins! ${opponentMove} (Power: ${opponentMovePower}) beats ${playerMove} (Power: ${playerMovePower}).`;
        } else {
            resultText.textContent = `It's a tie! Both moves (${playerMove} and ${opponentMove}) have the same power: ${playerMovePower}.`;
        }
    } catch (error) {
        console.error("Error during fight:", error);
        alert("Team Rocket has intervened in fight");
    }
}
