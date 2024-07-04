//Immediately Invoked Function Expression(IIFE)

//syntax-first-(function defination) and second-()execution
(function hello(){
    //named iife
    console.log("Hello World");
})();
//why it is used?-mostly in db connections and global scope pollution problems like declaartions,etc occur to remove this pollution we use iife
((name)=>{
    //unamed iife
    console.log(`Hello ${name}`);
})('Anushka');