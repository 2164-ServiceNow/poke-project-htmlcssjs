const rootMoveUrl = "https://pokeapi.co/api/v2/move";

const moveSearch = document.getElementById("moveSearch");
const moveCard = document.getElementById("moveCard");
const defaultMoveCardHtml = moveCard.innerHTML;

function queryMoveXMLHttpRequest() {
    let moveSearchName = moveSearch.value;
    let request = new XMLHttpRequest();
    request.open("GET", `${rootMoveUrl}/${moveSearchName}`, true);
    request.send();

    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(JSON.parse(request.responseText));
        }
    };
}

function queryMoveFetch() {
    let moveSearchName = moveSearch.value;
    fetch(`${rootMoveUrl}/${moveSearchName}`)
        .then(response => response.json())
        .then(move => {
            console.log(move);
        })
        .catch(error => console.error(error));
}

async function queryMove() {
    let moveSearchName = moveSearch.value;
    try {
        const response = await fetch(`${rootMoveUrl}/${moveSearchName}`);
        const move = await response.json();
        console.log(move);
        updateMoveCard(move);
    } catch (error) {
        console.error(error);
    }
}

function updateMoveCard(move) {
    moveCard.innerHTML = defaultMoveCardHtml;

    document.getElementById("moveName").textContent += `${move.name}`;
    document.getElementById("moveAccuracy").textContent += `${move.accuracy || "N/A"}`;
    document.getElementById("moveEffectChance").textContent += `${move.effect_chance || "N/A"}`;
    document.getElementById("movePP").textContent += `${move.pp}`;
    document.getElementById("movePriority").textContent += `${move.priority}`;
    document.getElementById("movePower").textContent += `${move.power || "N/A"}`;

    const effectTableBody = document.getElementById("effectTable").querySelector("tbody");
    effectTableBody.innerHTML = ""; 

    for (let i = 0; i < move.effect_entries.length; i++) {
        const row = `
            <tr>
                <td>${move.effect_entries[i].effect}</td>
                <td>${move.effect_entries[i].short_effect}</td>
            </tr>
        `;
        effectTableBody.innerHTML += row;
    }
}
