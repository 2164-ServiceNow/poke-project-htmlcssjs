

function walkDog(callback){
  setTimeout(()=>{console.log(" you Walk the dog")
    callback();
  },1500);
}

function cleankitchen(callback){
  setTimeout(() => {console.log(" Clean the kitchen");
    callback();
    
  }, 2000);
}

 function takeTrashOut(callback){
  setTimeout(() => {console.log( "Trash out")
    callback();
  }, 3000);
 }


 walkDog(()=> 
  {
    cleankitchen(() => 
      {
        takeTrashOut(()=>{console.log("you finshed")})

 })})