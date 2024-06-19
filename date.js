let myDate=new Date()
console.log(myDate.toDateString())//returns date as string
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())
console.log(myDate.toLocaleTimeString())
console.log(typeof myDate)//object

//let myCreatedDate=new Date(2023,0,23)
let myCreatedDate=new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleDateString())
//console.log(myCreatedDate.getTime())
let TimeStamp=Date.now()
//console.log(TimeStamp)
console.log(Math.floor(Date.now()/1000))
let newDate=new Date()
console.log(newDate.getFullYear())