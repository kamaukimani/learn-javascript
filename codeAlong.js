console.log("Let's code along !!!!");
const fn=function(){
    const toReturn="This is an anonymous function tied to a variable";
    return toReturn;
};
console.log(fn());

const mondayWork=function(activity="go to the office"){
    return `This monday, I will ${activity}.`;
};
//console.log(mondayWork());
console.log(mondayWork("swim till evening"));
(function(baseNumber){
    const sum=baseNumber+3;
    console.log("The sum is",sum);
    return "something";
    console.log("I will be reached when the return is commented");
})(2);
function outer(greetings,message="It's a fine day to learn"){
    const innerFunction=function(name,language="Python"){
        return`${greetings}, ${name}! ${message} ${language}`;
    };//return innerFunction("Student","Javascript");
    return innerFunction("Programmer");
};
//const callOuter=outer("Hello");
const callOuter=outer("Hello","Lets do some coding with");
console.log(callOuter);

function outerFunction(greetings,message="Let's buid some games with"){
    return function(name,language="Python"){
        return `${greetings} ${name}! ${message} ${language}`;
    };
};
const callingOuterFunction=outerFunction("Hello")("Developer");
console.log(callingOuterFunction);
//console.log(callingOuterFunction("Programmer"));

const array=(function(thingToAdd){
    const base=3
    return [
        function(){
            //sum=base+thingToAdd;
            return base + thingToAdd;
        },
        function(){
            return base
        }
    ]
})(2);
const returnArrayZero=array[0]();
console.log(returnArrayZero);
const returnArray=array[1]();
console.log(returnArray);

function demoChain(name){
    const part1="hi";
    return function(){
        const part2="there";
        return function(){
            return`${part1.toUpperCase()} ${part2} ${name}!!!!!!!!`;
        };
    };
};

const callDemoChain=demoChain("Dr.Francis")()();
console.log(callDemoChain);

function wrapAdjective(character="*"){
    return function innerSpecial(a="special"){
        return `You are ${character}${a}`
    };
};
//const callWrappedAdjective=wrapAdjective()();
const callWrappedAdjective=wrapAdjective("%")("a dedicated programmer");
console.log(callWrappedAdjective);
// function monday(){
//     console.log("Go for a five-minutes run");
//     console.log("Pump iron");
// };
// function monday(){
//     runFiveMiles();
//     liftWeight();
// };
function monday(){
    exerciseRoutine(liftWeight);
    
};
// function tuesday(){
//     console.log("Go for a five-minutes run");
//     console.log("Swim 40 laps");
// };
// function tuesday(){
//     runFiveMiles();
//     swimFortyLaps();
// };
function tuesday(){
    exerciseRoutine(swimFortyLaps);
};
// function wednesday(){
//     console.log("Go for a five-minutes run");
//     console.log("Go for a five-minutes run");
// };
// function wednesday(){
//     runFiveMiles();
//     runFiveMiles();
// };
function wednesday(){
    exerciseRoutine(runFiveMiles)
};
// function thursday(){
//     console.log("Go for a five-minutes run");
//     console.log("Pump iron");
// };
// function thursday(){
//     runFiveMiles();
//     liftWeight();
// };
function thursday(){
    exerciseRoutine(liftWeight);
};
// function friday(){
//     console.log("Go for a five-minutes run");
//     console.log("Swim 40 laps");
// };
// function friday(){
//     runFiveMiles();
//     swimFortyLaps();
// };
function friday(){
    exerciseRoutine(swimFortyLaps);
};
function runFiveMiles(){
    console.log("Go for a five-miles run");
};
function liftWeight(){
    console.log("Pump iron");
};
function swimFortyLaps(){
    console.log("Swim 40 laps");
};
console.log("...........................POST RUN ACTIVITY...........................");
console.log(monday());
console.log(tuesday());
console.log(wednesday());
console.log(thursday());
console.log(friday());

console.log("...........................POST RUN ACTIVITY...........................");
function exerciseRoutine(postRunActivity){
    runFiveMiles();
    postRunActivity();
};

const returnFirstTwoDrivers=function(array){
    const twoDrivers=[];
    for(let i = 0;i<2;i++){
        const names=array[i];
        twoDrivers.push(names)
    };
    return twoDrivers;
};
const callingReturnFirstTwoDrivers=returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log("The first two drivers are:",callingReturnFirstTwoDrivers);

const returnLastTwoDrivers=function(array){
    const twoDrivers=[];
    for(let i = array.length -2;i <array.length ;i++){
        const names=array[i];
        twoDrivers.push(names);
    };
    return twoDrivers;
};
const callingLastTwoDrivers=returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log("The last two drivers are:",callingLastTwoDrivers);
const selectingDrivers=function(){
    return[
        callingReturnFirstTwoDrivers,
        callingLastTwoDrivers,
    ]
};
const returningSelectingDrivers=selectingDrivers();
console.log("Returning the first and last two drivers:",returningSelectingDrivers);

function createFareMultiplier(fare){
    return function(){
        const quadRupleFare=fare*4
        return quadRupleFare;
    }();
};
const callFareMultiplier=createFareMultiplier(30);
console.log("The fare multiplied by 4 is:",callFareMultiplier);

const gloobalVar=1;
function firstFunc(){
    const firstVar=2
    return gloobalVar + firstVar;
};
console.log("Calling first function",firstFunc());
function firstFunction(){
    const firstVar=2;
    function secondFunc(){
        const secondVar=3;
        return secondVar+firstVar+gloobalVar;
    };
    const resultFromSecondFunc=secondFunc();
    return resultFromSecondFunc;
};
console.log("The results from the three functions:",firstFunction());


