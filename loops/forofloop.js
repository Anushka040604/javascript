/*const arr=[1,2,3,5,6]

for(const num of arr)
{
    console.log(num);
}
//iterate over string
const name="Anushka"
for(const n of name)
{
    console.log(n)
}*/

//Maps-map itself is a object-it hold key value pair-remebers the original insertion order of keys-there is no duplicate values
//maps are not iteratable
const map=new Map()
map.set(1,'Mumbai')
map.set(2,'Delhi')
console.log(map)//Map(2) { 1 => 'Mumbai', 2 => 'Delhi' }
for(const [key,value] of map)
{
    console.log(key,':',value);
}

const object={
    'game1':'kho-kho',
    'game2':'chess'
}
/*
//TypeError: object is not iterable
for(const iterator of object)
{
    console.log(iterator)
}*/