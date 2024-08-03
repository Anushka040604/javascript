const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve(); // Resolve the promise after the async task is complete
    }, 1000);
});

// Then automatically receives arg from the above function
promiseOne.then(function() {
    console.log("Promise completed");
});

const promiseTwo=new Promise(function(resolve,reject){

    setTimeout(function(){
        let error=false;
        if(!error)
        {
            resolve({username:"Anushka",password:'12345'});
        }
        else{
            reject('Error..something went wrong!!');
        }
        
    },1000);
})
//this is known as promise chaining
promiseTwo.then((user)=>{
 console.log(user);
 return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("promise is either resolved or rejected");
})
//we cannot print this promise outside of function for printing data

const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=false;
        if(!error)
        {
            resolve({username:"Anushka",password:'12345'});
        }
        else{
            reject('Error..something went wrong!!');
        }
        
    },1000);
});
async function consumePromise(){
        const response=await promiseThree
        console.log(response);
}
consumePromise();

async function getAllUser(){
   try {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const data=await response.json();
   console.log(data);
    
   } catch (error) {
    console.log(error);
   }
}
getAllUser()
