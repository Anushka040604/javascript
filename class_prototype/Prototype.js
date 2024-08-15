let myname="Anushka         "
//console.log(myname.trueLength());//undefined
String.prototype.trueLength=function(){
console.log(this);
console.log(this.myname);
console.log(`True Length is:${this.trim().length}`)
}
myname.trueLength()
"Javascript".trueLength()

let names=['Anushka','Tanvi']
let user={
    name:'Anushka',
    roll:123,
    division:function(){
        console.log(`Name=${this.name}`);
    }
}
//object becomes top of hierarchy
Object.prototype.Anushka=function(){
    console.log('Anushka is present in all objects')
}
user.Anushka()
names.Anushka()
Array.prototype.name=function()
{
    console.log("Hello");
}
names.name()
