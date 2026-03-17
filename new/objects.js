console.log("Lets look ata some objects.");
console.log("The code here is a little bit abstracted...SORRY!!!!");

function game(){
    const gameObject={
        home:{
            teamName:"Brooklyn Nets",
            colors:["Black","White"],
            players:{
                "Alan Anderson":{
                    "number":0,
                    "shoe":16,
                    "points":22,
                    "rebounds":12,
                    "assists":12,
                    "steals":3,
                    "blocks":1,
                    "slamDunks":1,
                },
                "Reggie Evans":{
                    "number":30,
                    "shoe":14,
                    "points":12,
                    "rebounds":12,
                    "assists":12,
                    "steals":12,
                    "blocks":12,
                    "slamDunks":7,
                },
            },
        },
        away:{
            teamName:"Charlote Hornets",
            colors:["Turquois","Purple"],
            players:{
                "Jeff Adrien":{
                    "number":4,
                    "shoe":18,
                    "points":10,
                    "rebounds":1,
                    "assists":1,
                    "steals":2,
                    "blocks":7,
                    "slamDunks":2,
                },
                "Bismark":{
                    "number":0,
                    "shoe":16,
                    "points":12,
                    "rebounds":4,
                    "assists":7,
                    "steals":7,
                    "blocks":15,
                    "slamDunks":10,
                },
            },
        },
    }
    return gameObject;   
}
//console.log("Calling game function:",game());

function homeTeam(){
    let object=game();
    return object["home"]["teamName"];
}
console.log(homeTeam());

const books=[
    {
        title:"Eloquent JavaScript",
        price:16.00,
        inventory:5
    },
    {
        title:"JavaScript: The good parts",
        price:10.50,
        inventory:10
    },
    {
        title:"Learn JavaScript Visually",
        price:25.00,
        inventory:2
    },
    {
        title:"You don't know js",
        price:60.00,
        inventory:2
    },
    {
        title:"JavaScript. The definitive Guide",
        price:18.95,
        inventory:0
    }
]
function totalInventory(arr){
    let total=0;
    for(const item of arr){
        total+=item.inventory;
        // console.log("The total number of books is:",total)
    }
    console.log("The total number of books is:",total)
    return total;
}
function printReport(fun){
    const callFunc=console.log(fun(books))
    return callFunc;
}
printReport(totalInventory);

function replenish(arr){
    
    for(const item of arr){
        if(item.inventory<5){
            const message=`${item.title} is remaining ${item.inventory}, restock item`
            console.log(message);
        }
        
    }
    return"Thank you";
    
}
console.log(replenish(books))
function replenishArray(arr){
    let arrayReplenish=[];
    for(const item of arr){
        if(item.inventory<5){
            arrayReplenish.push(item);
        }
    }
    return arrayReplenish;
}
console.log("List of almost replenished books:",replenishArray(books));
function loopAndUpdate(array,foo){
    let updatedArray=[];
    for(const item of array){
        updatedArray.push(foo(item));
    }
    return updatedArray;
}
function titles(item){
    return item.title;
}
function prices(item){
    return item.price;
}
function inventory(item){
    return item.inventory;
}
function halfPrices(item){
    //item.price=item.price/2;
   const newArray=Object.assign({},item);
    newArray.price=Math.floor(item.price/2);
    return newArray.price;
}
console.log(".................................................");
console.log(loopAndUpdate(books,titles));
console.log(loopAndUpdate(books,prices));
console.log(loopAndUpdate(books,inventory));
console.log("Half prices",loopAndUpdate(books,halfPrices));
console.log(books);


console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
const title=books.map(item=>item.title);
console.log(title);
const price=books.map(item=>item.price);
console.log(price);
const inventorio=books.map(item=>item.inventory);
console.log(inventorio);
const halfMap=books.map(item=>Math.floor(item.price/2))
console.log("Half prices",halfMap);
console.log(books);

function findBook(arr){
    let itemHolder=[];
    for(const item of arr){
        if(item["title"]==="Eloquent JavaScript"){
        return item
        }
    }
    return "Book not found";
}
console.log("Finding our book:",findBook(books));
// const bookFinder=books.find(item=>{
//     if(item["title"]==="You don't know js"){
//         return item;
//     }
//     return "Book notfound";
// })
// console.log("Book Finder:",bookFinder);

const bookFinder=books.find(item=> item.title==="You don't know js");
console.log("Book Finder:",bookFinder);
const findInventory=books.find(item=>item.inventory===10);
console.log("The number of books remaining:",findInventory);

console.log("I fear the reduce method. I don't know why!!!!!!!!!!!!!");
// const reducer=(accumulator,item)=>{
//     console.log(accumulator,item);
//     let total=item.price*item.inventory;
//     accumulator+=total;
//     return accumulator;
// }
const reducer=(accumulator,item)=>{
    console.log(accumulator,item)
    return accumulator +", "+ item.title
}
// const total=books.reduce(reducer,0);
let total=books.reduce(reducer,"").substring(2)
console.log("Total:",total);
const forEachBook=books.forEach(logTitle);

function logTitle(item){
    console.log(item.title.toUpperCase());
}