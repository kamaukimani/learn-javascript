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

//code challenge
class Polygon{
    constructor(arr){
        this.arr=arr;
        this.count=0;
        this.sum=0;
    }
    get countSides(){
        for(const item of this.arr){
            this.count+=1
           
        }
        return this.count;
    }
    get perimeter(){
        for(const side of this.arr){
            this.sum+=side;
        }
        return this.sum;
    }

}
const test=new Polygon([1,7,5])
class Triangle extends Polygon{
    get isValid(){
        const[a,b,c]=this.arr;
        if(a+b>c && a+c>b && b+c>a ){
            return "The sides are valid"
        }else{
            return "The sides can not make a triangle";
        }
        }
}
// const triangle= new Triangle([3,4,5]);
const triangle= new Triangle([3,2,5]);

class Square extends Polygon{
    get isValid(){
        const [a,b,c,d]=this.arr
        if(a===b&&a===c&&a===d&&b===c&&b===d&&c==d){
            return "The sides are valid";
        }else{
            return "The sides can not form a square";
        }
    }
    get area(){
        const [a,b,c,d]=this.arr
        if(a===b&&a===c&&a===d&&b===c&&b===d&&c==d){
            return a*b || b*c ||c*d ||a*c||a*d|| b*d;
        }else{
            return "Invalid inputs!"
        }
        
    }
}
const square=new Square([3,3,3,3])

/*
class Polygon {
    constructor(arr) {
        this.arr = arr;
    }

    get countSides() {
        return this.arr.length;
    }

    get perimeter() {
        return this.arr.reduce((sum, side) => sum + side, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.arr.length !== 3) return false;

        const [a, b, c] = this.arr;
        return (a + b > c && a + c > b && b + c > a);
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.arr.length !== 4) return false;

        const [a, ...rest] = this.arr;
        return rest.every(side => side === a);
    }

    get area() {
        if (!this.isValid) return null;

        const side = this.arr[0];
        return side * side;
    }
}
 */

/*
Practice Writing JavaScript classes That Inherit
From Other Classes
==>1. Define a Polygon class. Polygon will accept an Array of integers as a parameter, which will
represent each side of a shape.
Use the get keyword to make a getter method countSides that counts the number of sides
(each index in the array).
Use the get keyword to make a getter method perimeter that calculates the sum of each
side (each index in the array) of the polygon. This method will become accessible to its child
classes.
==>1. Define a Triangle class that inherits from Polygon .
It will automatically have access to count and perimeter inherited from Polygon .
Use the get keyword to make a getter method isValid that checks if the given 3 sides for a
triangle is valid.
The sum of the lengths of any two sides of a triangle is greater than the length of the third side.
If you take the three sides of a triangle and add them in pairs, the sum is greater than (not equal
to) the third side. If that is not true, then it is not possible to construct a triangle with the given
side lengths.
==>1. Define a Square class that inherits from Polygon .
It will automatically have access to count and perimeter inherited from Polygon .
https://moringa.instructure.com/courses/1019/assignments/72423?module_item_id=170312

Use the get keyword to make a getter method isValid that checks if the given 4 sides for a
square is valid. A square is valid when the lengths of all sides are equal.
Use the get keyword to make a getter method area that calculates the area of the square.
*/



//super keyword

class Pet1{
    constructor(name){
        this.name=name;
        this.owner=null;
    }
    static definition(){
        return`A pet is an animal kept primarily for a person's company.`;
    }
}
class Dog1 extends Pet1{
    constructor(name,breed){
        //super used as a method ==> super()
        super(name);
        this.breed=breed;
    }
    static definition(){
        return (
            //super used as an object ==>super.
            super.definition() + "Dogs are one of the most common types of pets."
        )
    }
}
const creature =new Pet1("The thing");
const dog1=new Dog1("Spot","foxhound");

//calling the static methods 
Pet1.definition(); 
Dog1.definition();

//super lab
class Tree{
    constructor(species){
        this.species=species;
    }
    static definition(){
        return `A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.`;
    }
}
const tree=new Tree("Maple");

class Deciduous extends Tree{
    constructor(species,name){
        super(species);
        this.name=name;
    }
    static definition(){
        return(
            super.definition() + "Deciduous trees shed their leaves annually."
        )
    }
}
const oak = new Deciduous( 'Oak', 'Professor' );

class Evergreen extends Tree{
    constructor(species,name){
        super(species);
        this.name=name;
    }
    static definition(){
        return(
            super.definition() + "Evergreens keep their leaves all year round."
        )
    }
}
const fir = new Evergreen( 'Fir', 'Douglas' );