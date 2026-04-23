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
