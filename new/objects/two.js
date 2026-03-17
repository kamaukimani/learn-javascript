console.log("We get into file two on objects!!!!");
function customGreetings(greeting,name,adjective,occassion){
    return `${greeting}, ${name}! Have a ${adjective} ${occassion}!`;
}
const callCustomGreetings=customGreetings("Good morning", "Pouja", "fantastic", "Tuesday");
console.log(callCustomGreetings);
// function discountedPrice(itemPrice){
//     return itemPrice-(itemPrice*0.25);
// };
// const callDiscountedPrice=discountedPrice(100);
// console.log(callDiscountedPrice);

// function discountedPrice(itemPrice,discount=0.25){
//     return itemPrice-(itemPrice*discount);
// };
// const callDiscountedPrice=discountedPrice(100,0.5);
// console.log(callDiscountedPrice);

function discountedPrice(itemPrice,tax,discount=0.25){
    let subTotal=itemPrice-(itemPrice*discount)
    return subTotal+(subTotal*tax);
};
// const callDiscountedPrice=discountedPrice(100,0.1,0.2);
const callDiscountedPrice=discountedPrice(100,0.1);
console.log(callDiscountedPrice);

function add(a,b,c){
    return a+b+c;
}
const arr=[1,2,3];
const callAdd=add(...arr);
console.log("The sum is:",callAdd);
// function muppetLab(a,b){
//     console.log(a,b);
// }
// const callMuppetLab=muppetLab("Dr. Bunson", "Beaker", "Miss Piggy", "Kermit", "Animal");

function muppetLab(a,b,...muppets){
    console.log(a,' ',b);
    console.log(muppets);
    console.log(muppets[0]);
    console.log(muppets.length);
}
const callMuppetLab=muppetLab("Dr. Bunson", "Beaker", "Miss Piggy", "Kermit", "Animal");