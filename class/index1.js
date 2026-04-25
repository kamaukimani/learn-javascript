console.log("Are we connected to learn inheritance and encapsulation");

//use the extends keyword
class Pet{
    constructor(name,sound){
        this.name=name;
        this.sound=sound;
    }
    speak(){
        return`${this.name} says ${this.sound}`;
    }
}
class Dog extends Pet{}
class Cat extends Pet{}
class Bird extends Pet{
    fly(){
        return`${this.name} flies away!!`
    }
}
const dog = new Dog("Shadow", "woof");
const cat = new Cat("Missy", "meow");
const bird = new Bird("Tiki", "squawk");