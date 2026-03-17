 //const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
 function match(arr,name){
    let driver=[];
    for(const element of arr){
        if(element ===name){
            driver.push(element);
        }
    }
    return driver
 }
//  const callMatch=match(drivers,"Bobby");
 //const callMatch=match(drivers,"Sammy");
 //console.log("Finding matching name:",callMatch);
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

 function matchInsensitive(name,arr){
    let holder=[];
    for(const item of arr){
        if(item.toLowerCase()===name.toLowerCase()){
            holder.push(item);
        }
    }
    return holder;
 }
//  const callMatchInsenstive=matchInsensitive("bobby",drivers);
// const callMatchInsenstive=matchInsensitive("Susan",drivers);
//const callMatchInsenstive=matchInsensitive("BobBy",drivers);
//console.log("Insensitive:",callMatchInsenstive);
//const drivers=['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
// function fuzzyMatch(nm,arr){
//     let holder=[];
//     let regex=new RegExp("^" + nm);
//     for(const item of arr){
//         if(regex.test(item)){
//             holder.push(item);
//         }
//     }
//     return holder;
// }
function fuzzyMatch(ab,arr){
    let holder=[];
    for(const item of arr){
        if(item.startsWith(ab)){
            holder.push(item);
        }
    }
    return holder;
}
//const callFuzzyMatch=fuzzyMatch("Sa",drivers);
//console.log("The first 2 chars:",callFuzzyMatch);
const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh' 
    },
    {
        name: 'Sammy',
        hometown: 'New York' 
    } ,
    {
        name: 'Sally',
        hometown: 'Cleveland' 
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles' 
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay' 
    }
];
console.log(drivers);
function matchName(name,arr){
    let holder=[];
    for(const item of arr){
        if(item.name===name){
            holder.push(item);
        }
    }
    return holder;
}
const callMatchName=matchName("Bobby",drivers);
console.log("Find Match:",callMatchName);