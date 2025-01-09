const rootUrl2 = "https://pokeapi.co/api/v2/item/"

const itemSearch = document.getElementById("itemSearch")

async function queryItem(){
    let itemSearchName = itemSearch.value

    //The AJAX code

    // let request= new XMLHttpRequest()


    // request.open("GET", `${rootUrl2}${itemSearchName}`,true) // rem to check what true does here

    // request.send()

    // request.onreadystatechange = () =>{
    //     if(request.readyState === 4 && request.status === 200){// rem to look more into what ready state is
    //         console.log(JSON.parse(request.responseText))
    //     }
    // }



    //The fetch code 

    // fetch(`${rootUrl2}${itemSearchName}`)
    // .then((response) => response.json())
    // .then((item) => {
    //     console.log(item)
    // })
    // .catch((error) => {
    //     console.error(error)
    // })
    // .finally(() => {
    //     console.log("fetch has concluded")
    // })


    //The Async Await code

    try{
        const response= await fetch(`${rootUrl}${itemSearchName}`)
        const item= await response.json()
        console.log(item)
    }catch(error){
        console.error(erorr)
    }finally{
        console.log("fetch has concluded")
    }

}