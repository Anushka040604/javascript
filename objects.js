//object literals
const sym=Symbol("key1")//symbol declaration
const juser={
    name:"Anushka",
    age:20,
    location:"Pune",
    [sym]:"key2",//use [] for symbol key
    email:"anushka@gmail.com"
}
console.log(juser.name)
console.log(juser["age"])
console.log(juser[sym])

juser.email="anushka12@microsoft.com"
//Object.freeze(juser)//Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
juser.email="anushka04@chatgpt.com"
console.log(juser)

juser.greeting= function(){
 console.log("Hello Anushka")
}
console.log(juser.greeting)//[Function (anonymous)]
console.log(juser.greeting())//Hello Anushka undefined

juser.greetingtwo= function(){
    console.log(`Hello ${this.name}`) //interpolation
}
console.log(juser.greetingtwo())
