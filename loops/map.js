const nums=[1,2,3,4,5]
const val=nums.map((num)=>num+10);
console.log(val);

//chaining-.map().map() first map result will be passed to 2nd map
const newNums=nums
              .map((num)=>num*10)
              .map((num)=>num+1)
              .filter((num)=>num>40)//true and false
              
console.log(newNums);