console.log("Let's learn some looping code");
for(let age=30;age<40;age++){
    console.log(`i am ${age} years old.Happy birthday to me!!`);
    //debugger;
};
const gifts=["teddy bear","drone","doll"];
function wrapGifts(arr){
    for(let i=0;i<arr.length;i++){
        console.log(`Wrapped ${arr[i]} and added a bow!!`);
    };
    return arr;
};
const callGiftWrapper=wrapGifts(gifts);
//console.log("The wrapped gifts",callGiftWrapper);
const nameArray=["Charlie","Samip","Ali"];
function writeCards(arr,event){
    const wrapper=[];
    for(let i=0;i<arr.length;i++){
        let message=`Thankyou ${arr[i]}, for a wonderful ${event}!`;
        console.log(message);
        wrapper.push(message);
        //console.log(wrapper);
    };
    return wrapper;
};
const callCardWrapper=writeCards(nameArray,"birthday");

const dolls=["teddy bear","drone","doll"];
function whileWrapper(arr){
    let i=0;
    while(i<arr.length){
        console.log(`${arr[i]} added a bow!!`);
        i++;
    };
    return arr;
};
const callDollsArray=whileWrapper(dolls);

// let i=10;
// while(i>=0){
//     console.log(i);
//     i--;
// };
function countDown(n){
    while(n>=0){
        console.log(n);
        n--;
    };
    return n;
};
const callCountDown=countDown(10);

const hello="Hello, world";
for(const char of hello){
    console.log(char);
};
const address={
    street1:"11 Broadway",
    street2:"2nd Floor",
    city:"New York",
    zipCode:"10004",
};
console.table(address);
for(const key in address){
    console.log(key);
};

for(const key in address){
    console.log(address[key]);
};

function shallowIterator(target){
    for(const key in target){
        console.log(target[key]);
    };
};
const primes=[2,3,5,7];
//shallowIterator(primes);
const numbers=[1,[2,[4,[5,[6]],3]]];
//shallowIterator(numbers);
function shalowIterator(target){
        for(const key in target){
        if(typeof target[key]==="object"){
            for(const nestedKey in target[key]){
                // if(typeof target[key][key]==="object"){
                //     for(const nestedTwo in target[key][key]){
                //         console.log(target[key][key][nestedTwo]);
                //     }
                // }else{
                //     console.log(target[key][nestedKey])
                // }  
                console.log(target[key][nestedKey]);              
            }
        }else{
            console.log(target[key]);
        }
    }
};
shalowIterator(numbers);
let counter=0;
function deepIterator(target){
    counter++;
    console.log("Counter is equal to:",counter);
    console.log("Argument:",target);
    if(typeof target ==="object"){
        for(const key in target){
            deepIterator(target[key]);
        }
    } else{
        console.log("Logged value:",target);
    }
}
deepIterator(numbers);
const person={
    firstName:"John",
    lastName:"Doe",
    father:{
        name:"Papa",
        age:54,
    },
    mother:{
        name:"Mama",
        age:50,
    },
    siblings:[
        "Alex",
        "Brenda",
        "Charlie",
        "Donah",
    ],
    scores:[20,30,45,12,45],
    wife:{
        name:"Julia",
        age:26,
    }
}
let count=0;
function deepIteratorArray(target){
    count++;
    console.log("Count s equal to:",count);
    if(Array.isArray(target)){
        console.log("We have found an array!!!!!");
        for(const element of target){
            console.log(element);
            deepIteratorArray(element);
        }
    }else if(typeof target==="object"){
        for(const key in target){
            deepIteratorArray(target[key]);
        }
    }else{
        console.log(target);
    }
}
deepIteratorArray(person);

