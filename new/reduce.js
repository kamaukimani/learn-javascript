console.log("Welcome to reduce!!!");
const products = [
  { name: "Shampoo", price: 4.99 },
  { name: "Donuts", price: 7.99 },
  { name: "Cookies", price: 6.49 },
  { name: "Bath Gel", price: 13.99 },
];

function getTotalAmountForProducts(arr){
    let total=0;
    for(const item of arr){
        total+=item.price
    }
    return total;
}
const callGetTotal=getTotalAmountForProducts(products);
console.log("The total is:",callGetTotal);

const couponLocations = [
  { room: "Living room", amount: 5 },
  { room: "Kitchen", amount: 2 },
  { room: "Bathroom", amount: 1 },
  { room: "Master bedroom", amount: 7 },
];
function ourReduce(arr,reducer,initialValue){
  let accumulator=initialValue;
  for(const element of arr){
    accumulator=reducer(accumulator,element)
  }
  return accumulator;
}
function countCoupon(totalAmount,location){
  return totalAmount+location.amount;
}
const callOurReduce=ourReduce(couponLocations,countCoupon,0);
console.log("The total amount of coupon is:",callOurReduce);

const numbers=[1,2,3];
const doubledAndSummed=numbers.reduce(function(accumulator,element){
  return element*2+accumulator;
},0)
console.log("The doubled and summed total is:",doubledAndSummed);

const letters=["a","b","c","b","a","a"];
const lettersCount=letters.reduce(function(countObj,currentLetter){
  if(currentLetter in countObj){
    countObj[currentLetter]++;
  }else{
    countObj[currentLetter]=1
  }
  return countObj;
},{})
console.log("The count objects:",lettersCount);

const artsShowCases={
  Dance:[],
  Visual:[],
  Music:[],
  Theater:[],
  Writing:[],
};
const incomingStudents=[
  "Alice",
  "Brian",
  "Clare",
  "David",
  "Eva",
  "Frank"
];
const studentSorter={
  showCaseAssign(student){
    const map={
      Alice:"Dance",
      Brian:"Music",
      Clare:"Visual",
      David:"Theater",
      Eva:"Writing",
      Frank:"Music",
    }
    return map[student];
  }
}
//console.log(studentSorter.showCaseAssign("Alice"));
const getShowCase=incomingStudents.reduce(function(showCase,student){
  const category=studentSorter.showCaseAssign(student);
  showCase[category].push(student);
  return showCase;
},artsShowCases);
console.log("The reduced array:",getShowCase);

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const getTotal=batteryBatches.reduce(function(totalBatteries,item){
  return totalBatteries+item;
});
console.log("The total batteries is:",getTotal);

const oppressedWorkers = [
  "Dopey",
  "Sneezy",
  "Happy",
  "Angry",
  "Doc",
  "Lemonjello",
  "Sleepy",
];
const union=oppressedWorkers.forEach(function(oppressedWorker){
  console.log(`${oppressedWorker} wants to form a union!!`)
})
console.log(union);

const arrayNumber=new Array(1,2,3);
console.log(arrayNumber);
function sumArray(numberArray){
  let total=0;
  numberArray.forEach(function(i){
    total+=i;
  })
  return total;
}
const callSumArray=sumArray(arrayNumber);
console.log("The sum is:",callSumArray);
const reduceSumArray=arrayNumber.reduce((accumulator,item)=> accumulator+item,0);
console.log("Sum using reduce:",reduceSumArray);

const empArray=[
  {firstName:"Byron",familyName:"Karbitii"},
  {firstName:"Luca",familyName:"Tuexedensis"},
]
function addFullNameToEmployees(arr){
  let fullName;
  arr.forEach(function(e){
    const fullName=`${e.firstName} ${e.familyName}`;
    console.log(fullName);
    
  })
  //return fullName;
}
const callFullName=addFullNameToEmployees(empArray);
console.log("Full employees names:",callFullName);
console.log(empArray);
const empCollectionMap=empArray.map((item)=>`${item.firstName} ${item.familyName}`)
console.log("Employee collection using map:",empCollectionMap);