const users = [
    {
        firstName: "Niky",
        lastName: "Morgan",
        favoriteColor: "Blue",
        favoriteAnimal: "Jaguar",
        personalQuote: "You're never too old to learn something new",
    },
    {
        firstName: "Tracy",
        lastName: "Lum",
        favoriteColor: "Yellow",
        favoriteAnimal: "Penguin",
        personalQuote: "I just got lost in thought - it was unfamiliar territory",
    },
    {
        firstName: "Josh",
        lastName: "Rowley",
        favoriteColor: "Blue",
        favoriteAnimal: "Penguin",
        personalQuote: "Always remember you’re unique, just like everyone else",
    },
    {
        firstName:"Kate",
        lastName: "Travers",
        favoriteColor: "Red",
        favoriteAnimal: "Jaguar",
        personalQuote: "Behind every great man is a woman rolling her eyes",
    },
    {
        firstName: "Avidor",
        lastName: "Turkewitz",
        favoriteColor: "Blue",
        favoriteAnimal: "Penguin",
        personalQuote:"You don’t have to see the whole staircase, just take the first step",
    },
    {
        firstName: "Drew",
        lastName: "Price",
        favoriteColor: "Yellow",
        favoriteAnimal: "Elephant",
        personalQuote:"Failure is not the opposite of success: it’s part of success",
    },
];

function printFirstName(arr){
    let firstName;
    for(const item of arr){
        console.log(item.firstName);
    }
    return "Thankyou"
}
console.log("Calling function",printFirstName(users));
//console.log(users);
function printBlue(arr){
    for(const user of arr){
        if(user.favoriteColor==="Blue"){
            console.log(user);
            //break;
        }
    }
    return "I thank you again";
}
//console.log(printBlue(users));
function anyColorPrinter(arr,color){
    let found=false;
    for(const user of arr){
        if(user.favoriteColor===color){
            console.log(user)
            found=true;
        }
    }
    if(!found){
        console.log(`The color ${color} is an invalid input`);
    }
    return "WOW"
}
console.log(anyColorPrinter(users,"Red"));
console.log(anyColorPrinter(users,"Yellow"));

function printAnything(arr,key,value){
    let found=false;
    for(const user of arr){
        if(user[key]===value){
            console.log(user)
            found=true;
        }
    }
    if(!found){
        console.log(`The key ${key} for ${value} is not found in our list`);
    }
    return "Yes";
}
console.log("Get anything:",printAnything(users,"lastName","Paul"));
const cards=["queen of hearts","jack of clubs","ten of diamonds"]
console.log(cards.indexOf("queen of hearts"));
console.log(cards.indexOf("jack of spades"));

const numbers=[2,3,4,5,6,7,8];
function isOdd(element,index,arr){ //you can also pass in the element alone  if you dont need the index and array;
    return (element %2===1);
}
const callIsOdd=numbers.find(isOdd);
console.log("The first old number is:",callIsOdd);
const callIsFilterOdd=numbers.filter(isOdd);
console.log("Find old using filter:",callIsFilterOdd);