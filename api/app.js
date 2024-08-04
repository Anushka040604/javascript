let url='https://catfact.ninja/fact';
fetch(url).then((response)=>{
    console.log(response);
    response.json().then((data)=>{
        console.log(data.fact);
    })
}).catch((error)=>{
    console.log('ERROR-',error);
});
//async and await
 async function getFacts(){
    try{
    let res= await fetch(url);
    let data=await res.json();
    console.log(data.fact);
    }
    catch(e)
    {
        console.log(e);
    }
 }//javscript is synchronous