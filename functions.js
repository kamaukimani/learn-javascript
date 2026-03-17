console.log("Function is a single most important bit of code in javascript");
const myText="I am  string";
let replaceText=myText.replace("string","replaced\n forever");
console.log(replaceText);
replaceText=myText.replace("am","hello there");
console.log(replaceText);
const myArray=["i","love","programming","in","javascript."];
const joinArray=myArray.join(" ");
console.log(joinArray);
// function draw() {
//   ctx.clearRect(0, 0, WIDTH, HEIGHT);
//   for (let i = 0; i < 100; i++) {
//     ctx.beginPath();
//     ctx.fillStyle = "rgb(255 0 0 / 50%)";
//     ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//     ctx.fill();
//   }
// }
// const callFunction=draw();
// console.log(callFunction);


function square(number){
    //number=3;
    return number*number;
};
const getResult=square(4);
console.log(getResult);

function myFunction(obj){
    obj.make="Toyo";
    return obj;
};
console.log(myFunction)
const myCar={
    make:"Toyota",
    date:2025,
    color:"Black"
};
console.log("Car before mutation",myCar);

const changeMake=myFunction(myCar);
console.log(changeMake);
console.log("Car after mutation",myCar);

function myFunc(arr){
    arr.push(4);
    return arr;
};
const myArr=[0,1,2,3]
console.log("Array before mutating",myArr);
const changeArray=myFunc(myArr);
console.log("Array after mutating",myArr);

function addSquares(a,b){
    function squares(c){
        return c*c;
    };
    return squares(a)+squares(b);
};
const squaresResult=addSquares(2,2);
console.log("The sum of squares of two numbers is",squaresResult);
const factorial=function fac(n){
    return n < 2 ? 1 : n*fac(n-1);
};
const factorialResult=factorial(4);
console.log(factorialResult);

function map(func,array){
    const newArray=new Array(array.length);
    for(let i=0;i < array.length;i++){
        newArray[i]=func(array[i]);
    };
    return newArray;
};
const array=[1,2,3,4,5,6];
console.log()
const cubeArray=map(function(a){
    return a**3;
},array);
console.log("Cubed array",cubeArray);

function conditionalFunction(a,b){
    const sum=a+b;
    if(sum>=10){
        function determine(a,b){
            if(a>b){
                return `${a} is gretater than ${b}`;
            }else{
                return`${b} is greater than ${a}`;
            };
        };return determine(a,b);
    }else{
        return `The sum ${sum} of ${a} and ${b} is less than 10`
    }
    //return determine();
};
//const conditional=conditionalFunction(3,4);
//const conditional=conditionalFunction(6,4);
const conditional=conditionalFunction(6,9);
console.log("Conditional functional execution===>",conditional);

function factorio(n){
    if(typeof n==="number"){
        if(n>=0){
            if(n===0 || n===1){
            return 1;
        };
        return n*factorial(n-1);
    }return `n must be an integer greater than or equal to zero(0)`
    }return `The type of n must be a number`;
};
//const getFactorial=factorio(3);
//const getFactorial=factorio(0);
//const getFactorial=factorio(-1);
//const getFactorial=factorio(-3);
//const getFactorial=factorio("hello");
//const getFactorial=factorio({firstName:"kang'ethe",age:20});
const getFactorial=factorio(5);
console.log("The factorial is===>",getFactorial);

function myConc(seperator){
    let results="";
    for(let i=1; i<arguments.length;i++){
        results+=arguments[i] + seperator;
    };
    return results;
};
const stringConcatenation=myConc(", ","Hello","programmer......");
console.log(stringConcatenation);

function polishConc(seperator,...items){
    let result="";
    for(let item of items){
        result+=item + seperator;
    };
    return result;
};
const concatedString=polishConc("-","i","love","programmng");
console.log(concatedString);

function polishSeperator(seperator,...items){
    return items.join(seperator);
};
const seperatorPolished=polishSeperator(": ","Hello","javascript","programmer");
console.log(seperatorPolished);
/*
const createPet = function (name) {
  let sex;

  const pet = {
    // setName(newName) is equivalent to setName: function (newName)
    // in this context
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };

  return pet;
};

const pet = createPet("Vivie");
console.log(pet.getName()); // Vivie

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver
**/

function multiply(a,b){
    b=typeof b !=="undefined"? b : 1;
    console.log("The value of b is",b);
    const c=a*b;
    if(Number.isNaN(c)){
        return "invalid inputs";
    };
    return c;
};
// const multiplied=multiply(5);
// const multiplied=multiply(5,4);
// const multiplied=multiply(5,"hello");
const multiplied=multiply(5,undefined);
console.log(multiplied);
//console.log(c);
console.log(".........................................................");
function defaultMultiply(a,b=1){
    const c=a*b;
    if(Number.isNaN(c)){
        throw new Error("Invalid inputs:arguments must be numbers");
    };
    return c;
};
try{
    // const multiplied=defaultMultiply(5,"hello");
    const multiplied=defaultMultiply(5,);
    console.log(multiplied);
}catch(error){
    console.error(error.message);
};
console.log(".........................................................");
function restArguments(multiplier,...theArgs){
    return theArgs.map(a=>multiplier*a);
};
const restArray=[1,2,3,4,5,6];
// const callRestFunction=restArguments(2,1,2,3,4,5,6);
const callRestFunction=restArguments(2,...restArray);
console.log(callRestFunction);
console.log("...............................................");
const person={
    name:"Kaniaru",
    greet:function(){
        setTimeout(()=>{
            console.log(this);
            console.log(this.name);
        },0);
        return "Loading....";
    },
};
//const callPerson=person.greet();
//console.log(callPerson);


// function Peerson(){
//     console.log(this);
//     this.age=0;
//     console.log(this);
//     setInterval(function growUp(){
//         this.age++
//     },1000);
//     return "Increasing age";
// };
// const callingPerson=new Peerson();
// console.log(callingPerson);

function identifyThis(){
    console.log(this);
    return this;
};
//console.log(identifyThis());

function Person(){
    const self=this;
    self.age=0;
    const intervalId=setInterval(function growUp(){
        self.age++;
        console.log(callingPerson);
        if(self.age===60){
            clearInterval(intervalId);
            console.log("Interval stopped");
        }
    },1000);

};
const callingPerson=new Person();
console.log(callingPerson);