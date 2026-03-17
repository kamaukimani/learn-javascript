const printBook=book=>`The book, ${book}, is fun to read!!!!`;
const callingPrintBook=printBook("Welcome to JavaScript")
console.log(callingPrintBook);
const add=(parameter1,parameter2)=>parameter1+parameter2;
const callAdd=add(2,3);
console.log("The sum is",callAdd);
//const twoAdder=x=>x+2;
const twoAdder=(x)=>x+2;
const callTwoAdder=twoAdder(5);
console.log(callTwoAdder);
const sum=(parameter1,parameter2)=>{
    const a=console.log("The value of parameter 1 is:",parameter1);
    const b=console.log("The value of parameter 2 is:",parameter2);
    const total=parameter1+parameter2;
    return `The sum of ${parameter1} and ${parameter2} is: ${total}`;
};
const callingSum=sum(2,3);
console.log(callingSum);
const nums=[1,2,3];
const squares=nums.map(x=>x**2);
const callingSquares=squares;
console.log("The squared numbers are:",callingSquares);

function iReturnThings(thing){
    return thing;
};
const obj={firstName:"Anne",secondName:"ngoma"};
// const callingReturnThings=iReturnThings({firstName:"Daniel",secondName:"Cyrus"});
// const callingReturnThings=iReturnThings(obj);
// const callingReturnThings=iReturnThings(function(){return 4+5;});
const callingReturnThings=iReturnThings(function(){return 4+5;});
console.log(callingReturnThings());

function theType(){
    return "Its okay"

};
console.log(typeof (function theType(){
    return "Its okay"

}));
