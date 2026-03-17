  const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"},
    { year: "2011", result: "N/A"},
    { year: "2010", result: "N/A"},
    { year: "2009", result: "N/A"},
    { year: "2008", result: "N/A"},
    { year: "2007", result: "N/A"},
    { year: "2006", result: "N/A"},
    { year: "2005", result: "N/A"},
    { year: "2004", result: "N/A"},
    { year: "2003", result: "N/A"},
    { year: "2002", result: "N/A"},
    { year: "2001", result: "N/A"},
    { year: "2000", result: "N/A"},
    { year: "1999", result: "N/A"},
    { year: "1998", result: "W"},
    { year: "1997", result: "W"},
    { year: "1996", result: "N/A"},
    { year: "1995", result: "N/A"},
    { year: "1994", result: "N/A"},
    { year: "1993", result: "N/A"},
    { year: "1992", result: "N/A"},
    { year: "1991", result: "N/A"},
    { year: "1990", result: "N/A"},
    { year: "1989", result: "L"},
    { year: "1988", result: "N/A"},
    { year: "1987", result: "L"},
    { year: "1986", result: "L"},
    { year: "1985", result: "N/A"},
    { year: "1984", result: "N/A"},
    { year: "1983", result: "N/A"},
    { year: "1982", result: "N/A"},
    { year: "1981", result: "N/A"},
    { year: "1980", result: "N/A"},
    { year: "1979", result: "N/A"},
    { year: "1978", result: "N/A"},
    { year: "1977", result: "N/A"},
    { year: "1976", result: "L"},
    { year: "1975", result: "N/A"},
    { year: "1974", result: "N/A"},
    { year: "1973", result: "N/A"},
    { year: "1972", result: "N/A"},
    { year: "1971", result: "N/A"},
    { year: "1970", result: "N/A"},
    { year: "1969", result: "N/A"},
    { year: "1968", result: "N/A"},
    { year: "1967", result: "N/A"},
    { year: "1966", result: "N/A"},
    { year: "1965", result: "N/A"},
    { year: "1964", result: "N/A"},
    { year: "1963", result: "N/A"},
    { year: "1962", result: "N/A"},
    { year: "1961", result: "N/A"},
    { year: "1960", result: "N/A"}
  ]

  function superbowlWin(element,arr){
    return element.result==="W";
  }
  const callSuperbowl=record.find(superbowlWin);
  console.log("The first win is in year:",callSuperbowl);
  const callFilterSuperbowl=record.filter(superbowlWin);
  console.log("All the wins:",callFilterSuperbowl);

  function recordFilter(arr){
    let holder=[];
    for(const element of arr){
        if(element.result==="W"){
            holder.push(element);
        }
    }
    return holder;
  }
  console.log("My own filter built:",recordFilter(record));

  const users = [
  {
    firstName: "Niky",
    lastName: "Morgan",
    favoriteColor: "Blue",
    favoriteAnimal: "Jaguar",
  },
  {
    firstName: "Tracy",
    lastName: "Lum",
    favoriteColor: "Yellow",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Josh",
    lastName: "Rowley",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Kate",
    lastName: "Travers",
    favoriteColor: "Red",
    favoriteAnimal: "Jaguar",
  },
  {
    firstName: "Avidor",
    lastName: "Turkewitz",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Drew",
    lastName: "Price",
    favoriteColor: "Yellow",
    favoriteAnimal: "Elephant",
  },
];
console.log(users);

function filter(arr,cb){
    let holder=[];
    for(const user of arr){
        if(cb(user)){
            holder.push(user);
        }
    }
    return holder;
}
const callFilter=filter(users,function(user){
    
    return user.favoriteColor==="Blue" && user.favoriteAnimal==="Penguin";
});
console.log("Call developer made filter:",callFilter);
console.log("Getting the now date:",Date.now());
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
]
function map(arr,cb){
  let newArr=[];
  for(const element of arr){
    newArr.push(cb(element));
  }
  return newArr;
}
const originalNumbers=[1,2,3,4,5];
const squaredNumbers=map(originalNumbers,function(num){
  return num*num;
})
console.log("The squared numbers:",squaredNumbers);
console.log("The original numbers:",originalNumbers);

const oldAccounts = [
  { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
];
const newEngineers=map(oldAccounts,function(account){
  return Object.assign({},account,{accessLevel:"admin"});
})
console.log("New Engineers:",newEngineers);
console.log("Old Engineers:",oldAccounts);
const userIDs=map(newEngineers,function(eng){
  return eng.userID;
})
console.log("The engineers ids:",userIDs);

const equippedEngineers=newEngineers.map(function(eng){
  return Object.assign({},eng,{equipment:"Laptop"});
})
console.log("Equipped Engineers:",equippedEngineers);
const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollcall=[];
for(const student of skiSchool){
  rollcall.push(student + " the skier");
}
console.log(rollcall);
function studentRollcall(student){
  return student +" the skier";
}
const studentMap=skiSchool.map(studentRollcall);
console.log("Students using map:",studentMap);
const mapArrow=skiSchool.map(student=> student + " the skier");
console.log("Map with Arrow:",mapArrow);

const robots = [
  { name: "Johnny 5", modes: 5, isActivated: false },
  { name: "C3PO", modes: 3, isActivated: false },
  { name: "Sonny", modes: 2.5, isActivated: false },
  { name: "Baymax", modes: 1.5, isActivated: false },
];
const activateRobot=robots.map(robot=> {
  let newRobot={...robot}
  //let newRobot=Object.assign({},robot);
  newRobot.modes=newRobot.modes*2;
  newRobot.isActivated=true
  return newRobot;
});
console.log("Activated robots",activateRobot);
console.log("Original robots",robots);
const mapActivateRobot=robots.map(robot=>{
  return Object.assign({},robot,{
    modes:robot.modes*2,
    isActivated:true,
  })
})
console.log("Having a cleaner look:",mapActivateRobot);

function mapRobots(arr,callback){
  let newArr=[];
  for(const element of arr){
    newArr.push(callback(element));
  }
  return newArr;
}
const callMapRobot=mapRobots(robots,function(robot){
  return Object.assign({},robot,{
    modes:robot.modes*2,
    isActivated:true,
  })
})
console.log("MY map:",callMapRobot);
console.log("Original",robots);


const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased(){
  let newTitles=[];
  for(const item of tutorials){
    newTitles.push(item
      .toLowerCase()
      .split(" ")
      .map(word=>word.charAt(0).toUpperCase()+word.slice(1))
      .join(" ")
    )
  }
  return newTitles;
}
const callTitleCased=titleCased();
console.log(callTitleCased);
console.log("Original arrar",tutorials);