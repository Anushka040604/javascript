const user={
    userName:"Anushka",
    price:100,
    welcomeMessage:function()
    {
        console.log(`${this.userName},welcome to website`);
    }

}
//user.welcomeMessage()
//user.userName="sam"
//user.welcomeMessage()
console.log(this);//{}-empty context

//global object-window object

/*function fun()
{
    let user="Anu"
    console.log(this);
    console.log(this.user);
}
fun() we cannot access property in function which is undefined*/

const fun=()=>{
    let username="Anushka"
    console.log(this.username);
}
//fun()-undefined

//arrow function
/*const addTwo=(num1,num2)=>{
    return num1+num2;
}*/

//implicit return- as it is single statement, remove {}
const addTwo=(num1,num2)=>(num1+num2);
console.log(addTwo(3,4));

//note-if we use {}-return is necessary and if we use ()-return is not necessary
//()-it is use to return object,we need to wrap curly braces in () while returning object
/*const Cname=()=>{customer:"Kittu"}
console.log(Cname()); output-undefined*/

const Cname=()=>({customer:"Kittu"})
console.log(Cname()); 


