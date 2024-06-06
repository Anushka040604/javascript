//const tinderuser=new Object()//singleton object
const tinderuser ={}//non-singleton object
tinderuser.id="123"
tinderuser.name="Anushka"
console.log(tinderuser)

//nesting of objects
const regularUser={
    email:"anushka@gmail.com",
    fullname:{
        userfullname:{
          firstname:"Anushka",
          lastname:"Bachhav"
        }
    }
}
console.log(regularUser.fullname.userfullname)
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d",
    name:"anu"
}
//const obj3={obj1,obj2} => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//const obj3=Object.assign({},obj1,obj2) =>{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj3={...obj1,...obj2}//spread operator
console.log(obj3)
console.log(Object.keys(obj1))//returns keys in array and same for values
console.log(Object.values(obj1))
console.log(Object.entries(obj2))
console.log(obj2.hasOwnProperty('name'))//object method
//=============================================================

//destructuring of objects
const course={
 coursename:"Javascript",
 price:999,
 courseInstructor:"Anisha"
}
//Accessing objects values by .,[] but if we want access multiple times for better readability we can destruct object
//course.courseInstructor
const {courseInstructor}=course
console.log(courseInstructor)
const {coursename:cname}=course
console.log(cname)

//JSON Api=>key and values both are in strings
/*{
    "name":"Anushka",
    "coursename":"Javascript"
    "price":"free"
}*/