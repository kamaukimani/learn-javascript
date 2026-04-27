console.log("Prototypal javascript!")

function User(name,age,hometown){
    return{
        name,
        age,
        hometown
    }
}
const charlie=User("Charlie",35,"Nairobi");
function User1(name,email){
    this.name=name;
    this.email=email;
    // this.sayHello=function(){
    //     return `Hello everyboday, my name is ${this.name} whom you have bee emailing at ${this.email}`;
    // }            ==> include this in the prototype to make it more efficient

}
const greyson=new User1("Greyson","greyson@example.com");
greyson.name;
User1.prototype.sayHello=function(){
    return `Hello everybody my name is ${this.name}`;
}
const sarah=new User1("Sarah","sarah@example.com");
const lauren=new User1("Lauren","lauren@example.com");
sarah.sayHello===lauren.sayHello
//console.log(User1);

//constructors function lab

function Scooter(year,color,model){
    this.year=year;
    this.color=color;
    this.model=model;
}
const samson = new Scooter(2015, "red", "swoosh");

function Driver(name,age,experience){
    this.name=name;
    this.age=age;
    this.experience=experience;
}
const allison = new Driver("Allison", "16 years", "2 years");

function PickupLocation(address,city){
    this.address=address;
    this.city=city;
}
const poshHotel = new PickupLocation("123 Broadway", "New York City");

/*
Instructions
Create a constructor function for each of the following:

==>Scooter with year, color, and model properties
==>Driver with name, age, and experience properties
==>PickupLocation with address and city properties
 */

//object methods

function BoardMember(name,homeState,training){
    this.name=name;
    this.homeState=homeState;
    this.training=training;
}
BoardMember.prototype.veto=function(){
    return`No, I must disagree`;
}
BoardMember.prototype.approve=function(){
    return`You can do that!`;
}
BoardMember.prototype.doCharity=function(){
    return`I like to help people.`;
}
BoardMember.prototype.releasePressStatement=function(){
    return`You will see great things from Scuber.`;
}
BoardMember.prototype.sayHi=function(){
    return`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
}
const polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law");

/*
Instructions
Scuber, in an effort to gain much needed local influence, has begun adding some powerful board members to its organization. It expects to add more (similar) board members in the future, so it needs you to declare a constructor function so that it can crank them out.

==>In index.js, write a constructor function called BoardMember that sets the following properties: name, homeState, and training.

Add following methods to the class:

==>veto — returns No, I must disagree
==>approve — returns You can do that!
==>doCharity — returns I like to help people.
==>releasePressStatement — returns You will see great things from Scuber.
==>sayHi — returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.
*/