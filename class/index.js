console.log("Are we connected to learn OOP in javascript????");
class Person{
    constructor(name,age,year){
        this.name=name;
        this.age=age;
        this.year=year;
    }
    introduce(){
        return `My name is ${this.name} and i am ${this.age} years, am year ${this.year} in KU`;
    }
}
const Kinuthia=new Person("Kinuthia",23,4);
console.log(Kinuthia);

class Hobby extends Person{
    constructor(name,hobby){
        super(name);
        this.hobby=hobby;
    }
    introduce(){
        return`My name is ${this.name} and my hobby is ${this.hobby}`
    }
}
const KinuHobby=new Hobby("Kinuthia","Playing volleyball");
console.log(KinuHobby);

class Student extends Person{
    #year
    constructor(name,year){
        super(name)
        this.#year=year
    }
    introduceSelf(){
        return `My name is ${this.name} and i am in year ${this.#year}`
    }
}
const stude=new Student("Kaniaru",3)
console.log(stude);
//console.log(stude.#year);

class Example{
    somePublicMethod(){
        this.#somePrivateMethod()
    }
    #somePrivateMethod(){
        console.log("You called me!!!")
    }
}
const exam=new Example();
exam.somePublicMethod();
//exam.#somePrivateMethod()

class Person1{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    sayHello(){
        console.log(`Hello my name is ${this.name}`);
    }
    sayAge(){
        console.log(`I am ${this.age} years old`);
    }
    haveBirthDay(){
        console.log("Its my Birthday");
        this.age+=1;
    }
}
const evan=new Person1("Evans",34);
evan.sayHello();
evan.sayAge();
evan.haveBirthDay();
evan.sayAge();

//old way of notifying developer that fields with (_) should not be changed
//but the fields are actually changeable
class Transaction{
    constructor(amount,date,memo){
        this._amount=amount;
        this._date=date;
        this._memo=memo
    }
}

const transaction=new Transaction(1000,"23/04/2020","home shopping");
transaction._amount
transaction._amount=2000
transaction._amount
transaction._date
transaction._memo

//create private fields that one can't change directly

class Transaction1{
    #amount;
    #date;
    #memo
    constructor(amount,date,memo){
        this.#amount=amount;
        this.#date=date;
        this.#memo=memo;
    }
}
const transaction1=new Transaction1(5000,"1/01/2000","girlfriend-shopping");
//console.log(transaction1.#amount)

class Breakfast{
    constructor(food,drink){
        this.food=food;
        this.drink=drink;
    }
}
const bfast=new Breakfast("egg","juice");

class Lunch{
    constructor(salad,soup,drink){
        this.salad=salad;
        this.soup=soup;
        this.drink=drink;
    }
}
const newLunch=new Lunch("side salad","broccoli cheddar soup","iced tea");

class Dinner{
    #dessert
    constructor(salad,soup,entree,dessert){
        this.#dessert=dessert;
        this.salad=salad;
        this.soup=soup;
        this.entree=entree;
    }
}

const newDinner=new Dinner("balsamic salad","consomme","filet mignon","cheesecake");

class Cat{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    speak(){
        return`${this.name} says meow!`
    }
}

const cat = new Cat("Sasha", "female");

class Dog{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    speak(){
        return`${this.name} says woof!`
    }
}

const dog = new Dog("Rufio", "male");
class Bird{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    speak(){
        const inst=this.sex==="male" ? `It's me! ${this.name} , the parrot!` : `${this.name} says squawk!`
        return inst;
    }
}
const bird = new Bird("Pablo", "male");
const bird2 = new Bird("Mable", "female");

//static methods

class CommonMath{
    static tripple(number){
        return number*number*number;
    }
    static findHypotenuse(a,b){
        return Math.sqrt(a*a+b*b)
    }
}

const num=CommonMath.tripple(3);
const c=CommonMath.findHypotenuse(3,4);

//get method

class Square{
    constructor(sideLength){
        this.sideLength=sideLength;
    }
    get area(){
        return this.sideLength*this.sideLength;
    }
    areaMessage(){
        return `The area of square with side ${this.sideLength} is ${this.area}`;
    }
}
const square=new Square(5);
const side=square.sideLength;
const area=square.area;
//const area=square.area();      => this results to an error


//set method
class Square1{
    constructor(sideLength){
        this.sideLength=sideLength;
    }
    get area(){
        return this.sideLength*this.sideLength;
    }
    set area(newArea){
        if(newArea>0){
            this.sideLength=Math.sqrt(newArea);
        }else{
            console.warn("Area can not be less than or equal to zero")
        }
    }
}
const square1=new Square1(5);
const side1=square1.sideLength;
const area1=square1.area;

//using get and set with private fields

class Square2{
    #sideLength
    constructor(sideLength){
        if(sideLength>0){
            this.#sideLength=sideLength
        }else{
            throw new Error("A square side length must be positive");
        }
        
    }
    get sideLength(){
        return this.#sideLength
        
    }
    set sideLength(sideLength){
        if(sideLength>0){
            this.#sideLength=sideLength;
        }else{
            throw new Error("A square side length must be positive")
        }
    }
}
const square2=new Square2(7);
const side2=square2.sideLength;

//code along
class Circle{
    constructor(radius){
        this.radius=radius
    }
    get diameter(){
        return  this.radius*2;
    }
    get circumference(){
        return Math.PI*this.diameter;
    }
    get area(){
        return Math.PI*this.radius*this.radius;
    }
    set diameter(diameter){
        this.radius=diameter/2;
    }
    set circumference(circumference){
        this.radius=circumference/(2*Math.PI)
    }
    set area(area){
        this.radius=Math.sqrt(area/Math.PI)
    }
}
/*
==>First, let's create a class of Circle
Circle will accept 1 parameter, radius , and use this.radius to store the value
Use Math.PI to get an accurate measurement of pi
(https://en.wikipedia.org/wiki/Pi) (π)
==>Define getter methods for diameter , circumference , and area which will calculate each
value using this.radius and pi
==>Define setter methods for diameter , circumference , and area which will accept values for
each calculation, calculate the radius based on the input value and set this.radius
accordingly
Hint: You will need to use Math.sqrt()
(https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) in your area setter method
For reference, here are the formulas for calculating diameter, circumference and area:
Diameter = radius • 2
Circumference = π • diameter
Area = π • radius2
*/

//static methods

class Formatter{
    static capitalize(string){
        return string.charAt(0).toUpperCase()+string.slice(1);
    }
    static sanitize(string){
        return string.replace(/[^A-Za-z0-9-' ]+/g, "");
    }
    static titleize(string){
        return string.split("")
    }
}
const njoroge=Formatter.capitalize("njoroge");