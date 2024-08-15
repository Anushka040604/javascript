function createUser(username,price)
{
    this.username=username;
    this.price=price;
}
createUser.prototype.increment=function(){
    this.price++;  
}
createUser.prototype.printPrice=function(){
    console.log(this.price);
}
const user1= new createUser("Anushka",20);
user1.printPrice();
const user2= new createUser("Tanu",15);

