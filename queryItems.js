const api = 'https://pokeapi.co/api/v2/item/';

// 1.XMLHttpRequest
// let request = new XMLHttpRequest();

// request.open('GET', `${api}master-ball`, true);
// request.send();
// request.onreadystatechange = () => {
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(JSON.parse(request.responseText));
//     }
// };

// 2.Fetch API with
// fetch(`${api}master-ball`)
//     .then((res) => res.json())
//     .then((item) => console.log(item))
//     .catch((err) => console.error(err))
//     .finally(() => console.log('Fetch has concluded!'));

// 3.Async/Await
async function getItems(items) {
    try {
        let heldItems = [];
        if (!items.length) return;
        for (const item of items) {
            const res = await fetch(`${api}${item.item.name}`);
            const item_ = await res.json();
            heldItems.push(item_);
        }
        return heldItems;
    } catch (error) {
        console.error(error);
    }
}
