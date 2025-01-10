function walDog(){
  
 return new Promise((resolve,reject)=>{



  setTimeout(() => {
    const walked=true;
    if(walked){  resolve("You walk the Dog");

          }
          else{
            reject("u did't")
          }
     
  }, 1000);

 })
}

function cleanKithcen(){
  
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      const clened=false;
      if(clened){
        resolve("You clean the kitchen");
      }else{
        reject("u didn't");
      }
      
      
    }, 2040);
  })
}

function takeOutTrash(){
  
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      const trash=true;
      if(trash){
        resolve("you clean the trash");
      }else{
        reject("u did't")
      }
   
      
    }, 200);        
  })
}


walDog().then(value => {console.log(value); return cleanKithcen()})
        .then(value =>{console.log(value); return takeOutTrash()})
        .then(value => {console.log(value);return console.log("you finshed the task");
        })
        .catch(error => console.error(error))
