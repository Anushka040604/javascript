const myNums=[1,2,3,4,5,6]
//it returns value-filter takes parameter call back function
const val=myNums.filter((num)=>num>4)
console.log(val)
//if we open scope we need to use return keyword

const newNums=[]
myNums.forEach((num)=>{
    newNums.push(num);
})
console.log(newNums);


const books=[
    {title:'Book 1',genre:'Fiction',edition:2004},
    {title:'Book 2',genre:'History',edition:2005},
    {title:'Book 3',genre:'Hisory',edition:2003},
    {title:'Book 4',genre:'Fiction',edition:2014},
];

const userbook=books.filter((book)=>book.genre==='Fiction')
console.log(userbook)


