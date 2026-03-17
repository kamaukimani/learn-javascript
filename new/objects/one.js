console.log("Understanding objects deeper!!!");
const phrases={
    greetings:"Hello there!!",
    time:()=>{
        const currentTime=new Date();
        return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`
    }
}
console.log("Get greetings:",phrases.greetings);
console.log("Get time:",phrases.time());
console.log(new Date());
const timeFormatter=Intl.DateTimeFormat("en-KE",{
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit"
})
console.log("The time is:",timeFormatter.format(new Date()));
const listOfGoodDogs = ["Nola", "Spinach", "Diego"];
const mapDog=listOfGoodDogs.map((dog)=>console.log(dog));
//console.log("Below are the dogs:",mapDog);

function PhraseObjectConstructor(name){
    this.greetings=`Hello there ${name}!`;
    this.time=()=>{
        const currentTime=new Date();
        return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`
    }
}
const phrase1=new PhraseObjectConstructor("Harlod");
console.log("phrase 1",phrase1);
//console.log("phrase 1",phrase1.time());

// const example={
//     name:"Henry",
//     sayName:function(){
//         return`My name is ${this.name}`;
//     }
// }
// console.log(example.sayName());
// const seeProto=example.__proto__;
// console.log(seeProto);
// const arr=new Array(1,2,3,4);
// const protoSee=arr.__proto__;
// console.log(protoSee);
const phrase2=new PhraseObjectConstructor("Hank");
console.log("phrase 2",phrase2);
const arr=[1,2,3,4]
arr.push(5);
console.log(arr);
const newArray=[...arr,6]
console.log(newArray);
const doggie1 ={
    name: 'Buzz',
    breed: 'Great Pyrenees',
    furColor: 'black and white',
    activityLevel: 'sloth-like',
    favoriteFood: 'hot dogs'
}
const doggie1Name=doggie1.name;
console.log("The dog's name is:",doggie1Name);
const doggie1Breed=doggie1.breed;
console.log("The dog's breed is:",doggie1Breed);
const {name,breed}=doggie1;
console.log("Name is:",name);
console.log("Breed is:",breed);

const doggie = {
  name: 'Buzz',
  breed: 'Great Pyrenees',
  furColor: 'black and white',
  activityLevel: 'sloth-like',
  favoriteFoods: {
    meats:{
      ham: 'smoked',
      hotDog: 'Oscar Meyer',
    },
    cheeses:{
      american: 'kraft'
    }
  }
};
const {ham,hotDog}=doggie.favoriteFoods.meats;
console.log("Ham is:",ham);
console.log("Hotdog is:",hotDog);
const dogs = ['Great Pyrenees', 'Pug', 'Bull Mastiff'];
const [medium,small,giant]=dogs;
console.log("Medium:",medium);
console.log("Small:",small);
console.log("Giant:",giant);
const[,smalli,gianti]=dogs;
console.log("Small is:",smalli);
console.log("Giant is:",gianti);
const [,,gianto]=dogs;
console.log("Gianto:",gianto);
const hello="Hello World!";
const splitted=hello.split(" ");
console.log(splitted);

const dogsName = 'Sir Woody BarksALot';
const [title,firstName,lastName]=dogsName.split(" ");
console.log("Title:",title);
console.log("First name:",firstName)
console.log("Last name:",lastName);