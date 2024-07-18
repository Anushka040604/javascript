/*reduce functionality-arr=[1,2,3,4]
intial value=0
accumulator,current value
accumulator is empty, first time intial value is filled in acc. 
acc+current
second time the sum will update in acc.
*/
const nums=[1,2,3,4]
const total=nums.reduce(function(acc,currval){
    console.log(`acc:${acc} and curr:${currval}`)
    return acc+currval
},0);
console.log(total);

const totals=nums.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log(totals)

const shoppingCart=[
    {
        itemName:"Python",
        price:999
    },
    {
        itemName:"Android",
        price:950

    },
    {
        itemName:"Java",
        price:599

    },
]

const totalItems=shoppingCart.reduce((acc,item)=>item.price+acc,0)
console.log(totalItems)