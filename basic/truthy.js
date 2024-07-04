const username=[]
if(username){
    console.log("Got username");
}
else{
    console.log("Not found");
}

//falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN
//truthy values
//"0",'false'-it is in string," "-whitespace in string,[],{},function(){}-empty function
if(username.length===0)
    {
        console.log("Array is empty")
    }
const emptyObj={}
if(Object.keys(emptyObj).length===0)
{
        console.log("Object is empty")
}

//Nullish Coalescing Operator (??):null undefined
let val1;
//val1=5??10;//5
//val1=null??10//10
val1=undefined??15
console.log(val1)
