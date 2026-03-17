console.log("Let's try and understand what lexical scope is!!!!!!!!");
const myVar="foo";
function first(){
    console.log("Inside first");
    console.log("The value of my Var is equal to",myVar);
};
function second(){
    const myVAr="Bar";
    first();
    return "Hello my var!!!!!!";
};
console.log("Calling second==>",second());

const myVariable="foo";
function forth(){
    function third(){
        console.log("Inside third");
        console.log("My variable is currently equal to=",myVariable);
        return "Its like third was called";
    };
    const myVariable="Bar"
    return third();
};
console.log("Calling forth:",forth());

console.log("Let us now shift to ARRAYS $ OBJECTS!!!!");
const arrayString=["This","is","an","array","of","strings."];
console.log(arrayString);
const primeNumbers=[2,3,5,7,11,13,17,19,23,29,31,37];
const flowers=["Rose","Lily","Orchard"];
const arrayLength=["This","array","has",5,"elements"];
console.log("The length of thi array is:",arrayLength.length);
const winningNumbers=[32,9,14,33,48,5];
function logWinningNumbers(numbers){
    return `The winning numbers are: ${numbers}`;
};
const callWinningNumbers=logWinningNumbers(winningNumbers);
console.log(callWinningNumbers);
//To acces an element in an array==> nameOfArray[index];
console.log("Element 1",winningNumbers[0]);
console.log("Element 2",winningNumbers[1]);
console.log("Element 3",winningNumbers[2]);
console.log("Element 4",winningNumbers[3]);
console.log("Element 5",winningNumbers[4]);
console.log("Element n:",winningNumbers[5]);
console.log(winningNumbers);
console.log("Accessing the last element in an array",winningNumbers[winningNumbers.length-1]);
const updatingWinningNumbers=winningNumbers[5]="I have been changed";
console.log("The updated winning numbers=> ",winningNumbers);
const board=[
    ["X","O",""],
    ["","X","O"],
    ["X","","O"],
];
console.log("The board is=>",board);
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);
const superHeros=["Cat woman","Storm","Jesicah Jones"];
console.log("The original superHeros is",superHeros);
const addSUperhero=superHeros.push("WonderWoman");
console.log("The mutated super heros is:",superHeros);
const cities=["New York","Chicago"];
console.log("The original cities:",cities);
const addCities=cities.unshift("Boston","San Francisco");
console.log("The mutated cities:",cities);
const coolCities=["New York","San Francisco"];
console.log("The array of cool cities",coolCities);
const copyOfCoolCities=[...coolCities];
console.log("Copy of cool cities",copyOfCoolCities);
const allCities=["Los Angeles",...coolCities];
console.log("All cities in USA are:",allCities);
const coolCats=["Hobes","Felix","Tom"];
const allCoolCats=[...coolCats,"Gar field"];
console.log("The all cool cats  are:",allCoolCats);
const days=["Mon","Tue","Wed","Thur","Fri","Sat","sun"];
console.log("All the days of thre week are=>",days);
const removeLastDay=days.pop();
console.log("The removed day is:",removeLastDay);
console.log("The array with one day removed is:",days);
const removeFirstDay=days.shift();
const theRemovedDay=removeFirstDay;
console.log("The element removed at the front of the array is:",theRemovedDay);
console.log("Array with first day removed",days);
const primeNumber=[2,3,5,7];
console.log("These are the prime numbers",primeNumber);
const copyOfPrimeNumbers=primeNumber.slice();
console.log("Copy of prime numbers with slice() method",copyOfPrimeNumbers);
const daysOfTheWeek=["Mon","Tue","Wed","Thur","Fri","Sat","Sun"];
const sliceDays=daysOfTheWeek.slice(0,2);
console.log("The sliced days of the week",sliceDays)
const names=["John","James","Peter","Luke","Judas","Reuben"];
console.log("Names before splicing",names);
//const splicingNames=names.splice(2);
//console.log(splicingNames);
console.log(names);
const spliceTwoArguments=names.splice(2,2);
console.log(spliceTwoArguments);
console.log(names);
const majina=["Jane","Juliet","Hariet","Charity","Jeniffer"];
console.log("Majina kabla ya kuguzwa:",majina);
const spliceMajina=majina.splice(2,1,"Mary","Karen","Ann");
console.log("These are the spliced names:",spliceMajina);
console.log("The array with with the spliced names=>",majina);
const cards=[
    "Ace of Spades",
    "Jack of Clubs",
    "Nine of Clubs",
    "Nine of Diamonds",
    "Three of Hearts",
];
console.log("These are the original cards:",cards);
const spliceCards=cards.splice(2,1,"Ace of Clubs");
console.log("The removed card is",spliceCards)
console.log("The updated cards are",cards);
const menu=[
    "Jalopeno Poppers",
    "Cheeseburger",
    "Fish and Chips",
    "French Fries",
    "Onion Rings",
];
//console.log(menu.slice(0,1));
const newMenu=[
    ...menu.slice(0,1),
    "Veggie Burger",
    "House Salad",
    "Teriyaki Tofu",
    ...menu.slice(3),
];
console.log("The original menu is:",menu);
console.log("The updated menu is:",newMenu);
console.log("//////NOW I AM IN OBJECTS///////");

const address={
    street:{
        line1:"11 Brodway",
        line2:"2nd Floor",
    },
    city:"New York",
    state:"NY",
    zipCode:"10004",
};
console.log("Printing the object to the console:",address);
console.log(address["street"]);
console.log(address["city"]);
console.log(address["state"]);
console.log(address["zipCode"]);
console.log("Accesing zipcode via an expression:",address["zip" + "Code"]);
console.log(address["street"]["line1"]);
console.log(address["street"]["line2"]);
console.log(address["country"]);

const wildKeys={
    "cash rules everything around me":"Wu",
    "C.R.E.A.M":"Tang",
    "Get the money":"For",
    "$$ bill, y'all!":"Ever",
};
console.log(wildKeys["cash rules everything around me"]);
console.log(wildKeys["C.R.E.A.M"]);
console.log(wildKeys["Get the money"]);
console.log(wildKeys["$$ bill, y'all!"]);

const meals={
    breakfast:"Oatmeal",
    lunch:"Caesar salad",
    dinner:"Chimichangas",
};
// let mealsName="lunch";
let mealsName="dinner";
console.log(meals[mealsName]);
const morningMeal="breakfast";
const middayMeal="lunch";
const eveningMeal="dinner";
const meaals={
    [morningMeal]:"French toast",
    [middayMeal]:"Personal pizza",
    [eveningMeal]:"Fish and chips",
};
console.log(meaals);
console.log(meaals[morningMeal]);
const wednesdayMenu={
    cheesePlate:{
        soft:"Brie",
        semiSoft:"Fontina",
        hard:"Provolence",
    },
    fries:"Sweet potatoes",
    salad:"Southwestern",
};
const getObjectKeys=Object.keys(wednesdayMenu);
const getInnerKeys=Object.keys(wednesdayMenu.cheesePlate);
//const getInnerKeys=Object.keys(wednesdayMenu["cheesePlate"]);
console.log("The inner keys=>",getInnerKeys);
console.log("The keys for wednesday menu are:",getObjectKeys);
const getObjectValues=Object.values(wednesdayMenu);
const getNestedObjectValues=Object.values(wednesdayMenu.cheesePlate);
console.log("The values of the nested object are:",getNestedObjectValues);
console.log("The  values of the wednesdayMenu object are==>",getObjectValues);

const circle={};
circle.radius=5;
circle["diameter"]=10;
circle["circumfrence"]=Math.PI*circle.diameter;
circle.area=Math.PI*circle.radius**2;
console.log("The circle object with the added key-value pairs:",circle);

const mondayMenu={
    cheesePlate:{
        soft:"Chevre",
        semiSoft:"Gruyere",
        hard:"Manchego",
    },
    fries:"Curly",
    salad:"Cabb",
};
console.log(mondayMenu);
mondayMenu.fries="Sweet potatoe";
console.log(mondayMenu);
function destructivelyUpdateObject(obj,key,value){
    obj[key]=value;
    return obj;
};
const tuesdayMenu=destructivelyUpdateObject(mondayMenu,"salad","Caesar");
console.log("The monday menu is:",mondayMenu);
console.log("The tuesday menu is:",tuesdayMenu);

function nondestructivelyUpdateObject(obj,key,value){
    const newObj={...obj}
    newObj[key]=value;
    return newObj;
};
const sundayMenu=nondestructivelyUpdateObject(tuesdayMenu,"fries","shoestring");
console.log("The sunday menu:",sundayMenu);
console.log("The tuesday menu:",tuesdayMenu);
function objectAssignment(obj,key,value){
    const newObj=Object.assign({},obj);
    newObj[key]=value;
    return newObj;
};
const objectAssignMenu=objectAssignment(sundayMenu,"fries","Beef fry");
console.log("Sunday menu:",sundayMenu);
console.log("Object assign menu:",objectAssignMenu);
const deleteProperty=delete objectAssignMenu.cheesePlate;
console.log(deleteProperty);
console.log(objectAssignMenu);