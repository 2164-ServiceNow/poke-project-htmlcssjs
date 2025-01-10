const baseUrl = "https://pokeapi.co/api/v2/item"

//AJAX
async function queryPokemon(){
    let pokeItemNum = pokeSearch.value

    // let request = new XMLHttpRequest()
    // request.open("GET", `${baseUrl}/${pokeItemNum}`, true)
    // request.send()

    // request.onreadystatechange = () =>{
    //     if(request.readyState === 4 && request.status === 200) {
    //         console.log(JSON.parse(request.responseText))
    //     }
    // }

//Fetch
// fetch(`${baseUrl}/${pokeItemNum}`) 
// .then((response) => response.json())
// .then((pokemon) => {
//     console.log(pokemon)
// })
// .catch((error) =>{
//     console.error(error)
// })
// .finally(() => {
//     console.log("fetch has concluded")
// })

//Async &Await
try{
    const response = await fetch(`${baseUrl}/${pokeItemNum}`) 
    const pokemon_items = await response.json();
    updateItems(pokemon_items)
    console.log(pokemon_items)
} catch (error){
    console.error(error)
} finally {
    console.log("fetch has concluded")
}

}

function updateItems(pokemon_items){
    const category_items = document.getElementById("category-items");
    const cost = document.getElementById("cost");
    const attributes_list = document.getElementById("attributes-list");
    const effect = document.getElementById("effect");
    const short_effect = document.getElementById("short-effect");
    const flavor_texts = document.getElementById("flavor-texts");

    category_items.innerHTML = `${pokemon_items.category.name}`
    cost.innerHTML = `${pokemon_items.cost}`
    effect.innerHTML = `${pokemon_items.effect_entries[0].effect}`;
    short_effect.innerHTML = `${pokemon_items.effect_entries[0].short_effect}`;

    for(let i = 0; i < pokemon_items.attributes.length; i++){
        attributes_list.innerHTML += `<li>${pokemon_items.attributes[i].name}</li>`
    }

    for(let i = 0; i < 2; i++){
        flavor_texts.innerHTML += `<strong>${pokemon_items.flavor_text_entries[i].version_group.name}</strong>
                                   <span>${pokemon_items.flavor_text_entries[i].text}</span><br>`
    }

}





