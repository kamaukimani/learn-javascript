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