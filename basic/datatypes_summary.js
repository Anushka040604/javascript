//primitive 
// 7 types:String, Number, Boolean, null, undefined, Symbol, BigInt
let name="Anushka";//string datatype
let age=21;//number
let isLog=true;//boolean
let state;//undefined
let id=Symbol('123')
console.log(id)

//Reference (Non-Primitive)
//Array, Objects, Functions
//Array:
const arr1=["Anu","Tanu","Neel"]
console.log(arr1)
let arr={
    name:"Anushka",
    age:20
};
//JavaScript is dynamically typed
//null returns object

const myfunction=()=>{
    console.log('Hello')
}
console.log(typeof myfunction)
console.log(myfunction)