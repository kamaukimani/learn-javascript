console.log("Lets do some practice");
{
    ("some text");
    5*8;
    const weCan="write ";
    const someCode="inside";
    const codeBlock="as shown here";
};
function distanceFromHqInBlocks(d){
    let distance;
    
};
function distanceFromHqinFeets(d){
    let distance = d*264;
};
function distanceTravelledInFeet(start,end){
    let distanceTravelled;
    if(end>start){
        distanceTravelled=end-start;
    }else{
        distanceTravelled=start-end;
    };
    return distanceTravelled;
};

function saturdayFun(activity="roller-skate"){
    return`This saturday i want to ${activity} !`;
};
//const satoFun=saturdayFun();
const satoFun=saturdayFun("ride my bikes");
console.log(satoFun);
const cats=["Milo","Otis","Garfield"];
console.log("Original cats:",cats)
function destructivelyAppendsCat(name){
    //apends a cat to the end of the cats array
    const newCatLenght=cats.push(name);
    return cats;
};
//const addCat=destructivelyAppendsCat("Ralph");
//console.log("Adding cats destructively",cats);
function destructivelyPrependCat(name){
    //Prepends a cat tot the beginning of the cats array
    const newCatLength=cats.unshift(name);
    return cats
};
//const addCat=destructivelyPrependCat("Bob")
//console.log("Adding a cat to the beginning of the cats array:",addCat)
function destructivelyRemovesLastCat(){
    //removes the last cat from the cats array
    const removedCat=cats.pop();
    return cats;
};
//const removeCat=destructivelyRemovesLastCat();
//console.log("Array with the last cat removed",cats);
function destructivelyRemovesFirstCat(){
    //removes the first cat from the cats array
    const removedCat=cats.shift();
    return cats;
};
//const removeCat=destructivelyRemovesFirstCat();
//console.log("Array contaning first cat removed:",cats);
function appendCat(name){
    //appends a cat to the cat array and returns a new array, leaving the cats array unchanged
    const newCatsArray=[...cats,name];
    return newCatsArray;
};
//const addCatSpread=appendCat("Broom");
//console.log("The appended cat's array using spread operator==>",addCatSpread);
//console.log("The original cat's array:",cats);
function prependCat(name){
    //prepends a cat to the cat's array and returns a new array,leaving the cat's array unchanged
    const newCatsArray=[name,...cats]
    return newCatsArray;
};
//const addCatSpread=prependCat("Arnold");
//console.log("The prepended cats array==>",addCatSpread);
//console.log("The original cat's array:",cats);
function removeLastCat(){
    //removes the last cat in the cat's array and returns a new array, leaving the cat's array unchanged
    const newCatsArray=cats.slice(0,-1);
    return newCatsArray;
};
//const newCatsArray=removeLastCat();
//console.log("The new array with last cat removed:",newCatsArray);
//console.log("Cheking if the original array was mutated==>",cats);
function removeFirstCat(){
    //removes the first cat in the cats array and returns a new array, leaving the cat's array unchanged
    const newCatsArray=cats.slice(1);
    return newCatsArray;
};
const newCatsArray=removeFirstCat();
console.log("The new cats array with the first cat removed:",newCatsArray);
console.log("The original cats array==>",cats);

const employee={
    name:"Sam",
    streetAddress:"11 Broadway",
};
console.log("The employee object:",employee);

function updateEmployeeWithKeyAndValue(obj,key,value){
    //const newObj={...obj};
    const newObj=Object.assign({},obj);
    newObj[key]=value;
    return newObj;
};
//const updateEmployeeSpread=updateEmployeeWithKeyAndValue(employee,"streetAddress","Not Broadway");
//console.log("The updated employee object with spread:",updateEmployeeSpread);
//console.log("The original employee object=>",employee);
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]=value;
    return obj;
};
//const destructiveUpdate=destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress","12 Broadway");
//console.log("The destructively updated object:",destructiveUpdate);
//console.log("The mutated original object:",employee);

function deleteFromEmployeeByKey(obj,key){
    // const newObj={...obj};
    const newObj=Object.assign({},obj);
    delete newObj[key];
    return newObj;
};
//const deleteKey=deleteFromEmployeeByKey(employee,"name");
//console.log("The object with the deleted key=>",deleteKey);
//console.log("The original object:",employee);
function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key];
    return obj;
};
//const destructiveDelete=destructivelyDeleteFromEmployeeByKey(employee,"name");
//console.log("The destructively deleted object:",destructiveDelete);
//console.log("The mutated original object:",employee);
