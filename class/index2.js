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