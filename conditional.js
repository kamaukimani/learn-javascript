function scuberGreetingForFeet(feet){
    let sample;
    if(feet <= 400){
        sample="This one is on me!";
    }else if(feet<= 2000){
        sample="That will be twenty bucks.";
    }else if(feet <= 2500){
        sample="I will gladly take you thirty bucks.";
    }else if (feet > 2500){
        sample="No can do";
    };
    return sample;
  // Write your code here!
};
const called=scuberGreetingForFeet(2501);
console.log(called);

function ternaryCheckCity(city){
    const checkCity= city==="NYC"? "ok, sounds good." : "No go.";
    return checkCity;
  // Write your code here!
};
let city=ternaryCheckCity("NYC");
console.log(city);

function switchOnCharmFromTip(tip){
    let message;
    switch(tip){
        case "generous":
            message="Thank you so much";
            break;
        case "not as generous":
            message="Thank you";
            break;
        default:
            message="Bye";
    };
    return message;
  // Write your code here!
}
const tip=switchOnCharmFromTip("not given");
console.log(tip);

console.log("Some arithimetics");
console.log(Number.isInteger(23.4));
console.log(Number.isInteger(23));
console.log(Number.parseInt("12.3"));
console.log(Number.parseInt("12.5"));
console.log(Number.parseInt("12.3"));
console.log(Number.isFinite(12.3));
console.log(Number.parseFloat("12.3"));
console.log(Number.isNaN("12.3"));
console.log(Math.random()+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log("..............................................................");
const num1=31
const num2=2
const num3=9
const num4=5
const multiply=num1*num2;
console.log(`The multiplication of ${num1} and ${num2} is`,multiply);
let random;
random=Math.floor(Math.random()*10)+1;
console.log("The random integer greater than 1 is",random);
random=Math.floor(Math.random()*10)+1;
console.log("The random integer greater than 1 is",random);
random=Math.floor(Math.random()*10)+1;
console.log("The random integer greater than 1 is",random);

const mod=num3%num4;
const max=Math.max(2,6,20,15,4,19);
//console.log(random);
console.log(mod);
console.log(max);