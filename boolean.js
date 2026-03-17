console.log("Testing out code!!");
console.log("The value of 2 raised to 3 is",2**3);
const likelyToRain=false;
//const likelyToRain=true;
const clothingChoice=likelyToRain ? "Rain Boots" : "Sun Hat";
console.log(clothingChoice);
//const rainPercentage=0.2;
const rainPercentage=0.5;
const choiceClothing=rainPercentage>0.3 ? `${rainPercentage} is greater than 0.3` : `${rainPercentage} is less than 0.3`;
console.log(choiceClothing);

const name="Kinuthia";
//const probabilityOfRain=0.2;
const probabilityOfRain=0.6;
//const temparatueInc=26;
const temparatueInc=28;
const message =`Hello ${name}, with a rain chance of ${probabilityOfRain * 100}% and a temparature of ${temparatueInc}C, we recommend that you ` + (probabilityOfRain > 0.3 ? "take an umbrella" : "enjoy this rain-free day") +
 ` ${temparatueInc >= 26 ? "watch out for heatstroke" : "and bask in this fine weather"}`;
 console.log(message);
let favouriteNumber=32;
console.log("FAVOURITE NUMBER BEFORE SELECTION",favouriteNumber);
if(favouriteNumber >= 40){
    favouriteNumber += 10;
};
console.log(favouriteNumber);

let favorNumber = 0;
while(favorNumber < 10){
    console.log("My favour number is",favorNumber);
    favorNumber += 1;
    //console.log("My favour number is",favorNumber);
};
//console.log("My favour number is",favorNumber);

// let number =0;
// while(true){
//     console.log("Infinite loop is at number",number);
//     number +=10000000;
// };
 

//adding comments to code
const lineOne="Joy to the world";
const lineTwo="All the boys and girls";
const lineThree="Joy to the fish in the deep blue sea";
const lineFour="Joy to you and me";
//The \n inserts a new line to the string
const chorus=`${lineOne}\n${lineTwo}\n${lineThree}\n${lineFour}`;
console.log(chorus);

//conditional in javascript
console.log("...................IF STATEMENT ALONE.................");
//const age =30;
const age =12;
if(age>=18){
    const isAdult=true;
    console.log("Is this an adult?",isAdult);
};
//console.log(isAdult);

console.log("...................IF STATEMENT + ELSE STATEMENT.................");

if(age>=18){
    const canVote=true;
    console.log("Can this person vote?",canVote);
}else{
    canVote=false;
    console.log("Can this person vote?",canVote);
};

console.log("...................CONDITIONS WITH TERNARY EXPRESSIONS.................");

//const miaka=30;
const miaka=17;
const isMkubwa=miaka >= 18 ? true : false;
console.log("Huyu mtu ni mtu mzima?",isMkubwa);

// the ternary(or if statement) is not desirable if the return value is ==> true or ==>false
console.log("....................NO NEED FOR IF OR TERNARY IF THE RETURN VALUE IS ==>TRUE OR ==>FALSE....................");
//const umri=45;
const umri=16;
const mtuMkubwa=umri >= 18;
console.log("Huyu ni mtu mzima kweli?",mtuMkubwa);

const umriMessage= umri>=18
? "Heko wewe ni mtu mzina"
: "Alaah!..Wewe bado mtoto mchanga";
console.log("Matokeo baada ya kuangalia umri==>",umriMessage);

console.log(".................ELSE IF STATEMENT.................");
//const years=-1;
const years=0;
let isAdult,canDrink,canEnlist,canWork;
if(years >= 21){
    isAdult=true;
    canWork=true;
    canEnlist=true;
    canDrink=true;
    console.log("This is an adult?",isAdult,"Can work?",canWork,"Can enlist?",canEnlist,"Can drink?",canDrink)

}else if(years>= 18){
    isAdult=true;
    canWork=true;
    canEnlist=true;
    console.log("This is an adult?",isAdult,"Can work?",canWork,"Can enlist?",canEnlist,)

}else if(years>= 16){
    canWork=true;
    console.log("Can work?",canWork)

}else if(years <= 0){
    console.log("ARE YOU STUPID!!!..HOW CAN ONE HAVE  NEGATIVE OR ZERO YEARS?????")
}else{
    console.log("YOU ARE TOO YOUNG FOR ANYTHING!!!!");
};
//console.log("This is an adult?",isAdult,"Can work?",canWork,"Can enlist?",canEnlist,"Can drink?",canDrink)
console.log(isAdult,canWork,canEnlist,canDrink);
console.log("...................NESTING IF STATEMENTS...................");
//const miiaka=0;
const miiaka=21;

if(miiaka >= 0){
    console.log("THIS IS A BABY!!!!")
    if(miiaka >= 16){
        canWork=true;
        console.log("Can this person work?",canWork);
        if(miiaka >=18){
            isAdult=true;
            canEnlist=true;
            console.log("Is this an adult?",isAdult,"Can this person enlist",canEnlist);
            if(miiaka >= 21){
                canDrink=true;
                console.log("Can this person drink?",canDrink);
            };
        };
    };
};
console.log("....................HERE WE ARE NOW LEARNING SWITCH STATEMENTS....................");
//const jina="Alice";
const jina="Kinuthia";
//const jina="Kaing'aing'e";
let greetings;
switch(jina){
    case "Alice":
        greetings="Hello Alice, how have you been?";
        console.log(greetings);
        break;
    case "Kinuthia":
        greetings=`Hello ${jina}, uko aje man?`;
        console.log(greetings);
        break;
    default:
        console.log(`Hello ${jina}, tunaweza jua unaitwa nani?`);
        break;
};

