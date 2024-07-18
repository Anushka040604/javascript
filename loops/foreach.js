/*const lang=['java','cpp','js','ruby']
//callback function does not have name
lang.forEach((item)=>{
 console.log(item);
})

lang.forEach((item,index,arr)=>{
 console.log(item,index,arr);
})
*/

const code=[{
    langName:"java",
    langFileName:'java'
},
{
     langName:"javascript",
    langFileName:'js'
}
]
code.forEach((item)=>{
    console.log(item.langName)
})
