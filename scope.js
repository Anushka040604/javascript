function one(){
    const username="Anushka"
    function two()
    {
        const website="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()
//global scope
//local scope
var c=300
if(true)
{ 
 let a=10
 const b=20
 var c=30
}
//console.log(a) we cannot access outside the scope
//same for b, but c can be access as 30 even it is globally declared as 300
console.log(c)
