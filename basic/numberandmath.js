const num=new Number(199)
console.log(num)
console.log(num.toFixed(3))
console.log(num.toLocaleString())
console.log(num.toExponential(2))
//---------------Math----------------------
console.log(Math.ceil(22.34))
console.log(Math.floor(22.34))

console.log(Math.random())//value between 0 and 1
console.log((Math.random()*10)+1)

const min=10
const max=20

console.log(Math.floor((Math.random()*(max-min+1))+min))