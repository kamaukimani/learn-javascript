console.log("Am i lost???????????????!!!!!!!!!!!!!!!");
function doMath(num1,num2,cb){
    
    return cb(num1,num2);
};
const callFunction=doMath(20,30,(num1,num2)=>num1*num2);
console.log("Calling the call-back function results:",callFunction);

console.log(".................................................");
function outer(){
    let counter=0;
    console.log(counter);
    return function inner(){
        
        if(counter<10){
            counter++
            console.log(counter);
        }
        
        return counter;
    };
};
const callOuter=outer();
callOuter()
callOuter()
callOuter()
callOuter()
callOuter()
callOuter()
callOuter()
callOuter()
callOuter()
callOuter()
callOuter()
callOuter()
console.log(callOuter());
console.log("..................................");
function receivesAFunction(a){
    
    return a(15,2);
};
const callReceivesFunction=receivesAFunction(function(c,b){
    const sum=c+b
    return sum;})
console.log(callReceivesFunction);
function returnsANamedFunction(a,b){
    let modulus=0;
    let division=a/b;
    if(a<b){
        modulus="Invalid combinaion"
    }else if(a%b===0){
        modulus="There is no remainder";
    }else{
        modulus=a%b;
    }
    return function getModulus(){
        return modulus;
    }();
};
const calReturnNamedFunction=returnsANamedFunction(7,3);
console.log("aloooooooooooooooo!!!!!!!!!!!!!!");
console.log(calReturnNamedFunction);
function returnsAnAnonymousFunction(){
    return function(){
        return "Am an anonymous function!!!!!";
    }();
};
const callAnonymousFunction=returnsAnAnonymousFunction();
console.log(callAnonymousFunction);
const getClearance=function(allowed){
    let access;
    if(allowed===true){
        access="Access granted";
    }else{
        access="Access denied";
    };
    return access;
};
const callAccess=getClearance(false);
console.log(callAccess);

const add=(x)=>(y)=>x+y;
const callAdd=add(2)(3);
console.log(callAdd);
const users=[
    {
        name:"John",
        age:30
    },
    {
        name:"Doe",
        age:27
    },
    {
        name:"Julia",
        age:35
    },
];
const getName=user=>user.name;
const getAge=(user)=>(user.age);
const userNames=[];
console.log("The empty array without names:",userNames)
const userAges=[];
console.log("The empty array without ages:",userAges);
for(let i=0; i<users.length;i++){
    // const name=getName(users[1]);
    const name=getName(users[i]);
    const age=getAge(users[i]);
    userNames.push(name);
    userAges.push(age);
};
console.log("Array with names",userNames);
console.log("Array with ages",userAges);
const nameUsers=users.map(a=>a.name);
console.log("User names using map method",nameUsers);
const startsWithD=(string)=>string.toLowerCase().startsWith("d");
const namesStartingWithD=[];
console.log("Names starting with D empty array=>",namesStartingWithD)
for(let i=0;i<users.length;i++){
    if(startsWithD(users[i].name)){
        namesStartingWithD.push(users[i]);
    };
};
console.log("Names starting with D filled array->",namesStartingWithD);
const filterNameStartingWithD=users.filter(user=>startsWithD(user.name));
console.log("Names staring with D using filter",filterNameStartingWithD);
const startsWithJ=(string)=>/^j/i.test(string);
const filterNamesStartingWithJ=users.filter(user=>startsWithJ(user.name));
console.log("Name starts with j",filterNamesStartingWithJ);
console.log("Let me try some reduce method,,,,,,,,,,,,,");
let total=0;
for(let i=0;i<users.length;i++){
    total+=users[i].age;
};
console.log("The total is===>",total);

const totalAge=users.reduce((total,user)=>total+user.age,0);
console.log("Total using reduce",totalAge);