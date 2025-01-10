const POKECARD = document.getElementById("pokeCard");
const POKESEARCH = document.getElementById("pokeSearch");
const POKECARDBODY = POKECARD.getElementsByClassName("card-body")[0];

// Search Options
let currentOption = document.getElementsByName("option")[0];

function selectOption(optionElem)
{
    currentOption = optionElem;
    POKESEARCH.setAttribute("placeholder", `Search for ${optionElem.id.slice(0,-6)}`);
    POKESEARCH.value = "";
}

Array.from(document.getElementsByName("option")).forEach(optionElem => {
    optionElem.onclick = function(){
        selectOption(optionElem);
    }
    if(optionElem.checked)
    {
        selectOption(optionElem);
    }
});

function search()
{
    POKECARD.classList.remove("d-none");
    clearNotifier();
    if(currentOption.id == "pokemonOption")
    {
        queryPokemon();
    }
    else if(currentOption.id == "itemsOption")
    {
        queryItem();
    }
}
// Search Options End

// Notifications
let notifierElem = document.getElementById("notifier");
let notifierTimeout = false;

function alertNotification(msg)
{
    notifierElem.classList.remove("d-none");
    notifierElem.classList.add("alert-danger");
    notifierElem.innerText = msg;
    
    clearTimeout(notifierTimeout);
    notifierTimeout = setTimeout(clearNotifier, 3500);
}

function clearNotifier()
{
    notifierElem.className = "alert d-none";
    notifierElem.innerText = "";
}
// Notifications End