console.log("Learning context!!!");
// const byronPoodle = {
//     name: "Byron",
//     ageInYears: 2,
//     warn: function() {
//             console.log(`Bark bark bark`);
//             console.log("This is =>",this);
//         }
// };
// const blakeDoodle = {
//   name: "Blake",
//   breed: "Labradoodle",
//   sonicAttack: "ear-rupturing atomic bark",
//   mostHatedThing: "noises in the apartment hallway",
//   warn: function() {
//     console.log(`${this.name} the ${this.breed} issues an ${this.sonicAttack} when he hears ${this.mostHatedThing}`);
//   }
// };

// const locationReturner = function() {
// return this.location.host;
// }
// console.log(locationReturner())
// class Poodle{
//   constructor(name, pronoun){
//     this.name = name;
//     this.pronoun = pronoun;
//     this.sonicAttack = "ear-rupturing atomic bark";
//     this.mostHatedThing = "noises in the apartment hallway";
//   }

//   warn() {
//     console.log(`${this.name} issues an ${this.sonicAttack} when ${this.pronoun} hears ${this.mostHatedThing}`);
//   }
// }
// const byron = new Poodle("Byron", "he");
// console.log(byron.warn());

const asgardianBrothers = [
  {
    firstName: "Thor",
    familyName: "Odinsson"
  },
  {
    firstName: "Loki",
    familyName: "Laufeysson-Odinsson"
  }
]
const phrase = "I like this brown drink very much, bring me another!"
function intro(person, line) {
  return `${person.firstName} ${person.familyName} says: ${line}`
}
const callIntro=intro(asgardianBrothers[0],phrase);
console.log("Calling intro without call or apply=>",callIntro)


function introWithContext(line){
  return `${this.firstName} ${this.familyName} says: ${line}`
} 
const callContext=introWithContext.call(asgardianBrothers[1],phrase);
console.log("Calling with call=>",callContext);    
const callApply=introWithContext.apply(asgardianBrothers[0],[phrase]);
console.log("Calling with apply:",callApply);

const thor=introWithContext.bind(asgardianBrothers[0]);
console.log(thor("Hello with bind"))


const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent:
    "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
    Thor: "Admiration, respect, and love",
    Loki: "Your son",
  },
  signatories: ["Thor", "Loki"],
};
//using this as the second arguement to forEach to regain the lost context bug 
console.log("Using this as the second argument to forEach()!!!!!!!!!!!!!!!!!!!!!!!");

const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

  this.signatories.forEach(function (signatory) {
    const message = `${this.closing[signatory]}, ${signatory}`;
    console.log(message);
  }, this);
};

printCard.call(messageConfig);

//using bind to  regain lost context bug 
console.log("Using bind to lock the execution context for forEach()!!!!!!!!!!!!!!!!!!!!!!!");
const printCard1 = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);
  const contextBoundForEachExpr = function (signatory) {
    const message = `${this.closing[signatory]}, ${signatory}`;
    console.log(message);
  }.bind(this);

  this.signatories.forEach(contextBoundForEachExpr);
};

printCard1.call(messageConfig);


//Using closure to avoid the lost context bug
console.log("Using closure to avoid the lost context bug>>>>>>>>>>>>>>>");

const printCard2 = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

  const outerContext = this;

  this.signatories.forEach(function (signatory) {
    const message = `${outerContext.closing[signatory]}, ${signatory}`;
    console.log(message);
  });
};

printCard2.call(messageConfig);

//using arrow function to avoid the lost contex bug 
console.log("Using arrow function expression to avoid lost context bug.............");
const printCard3 = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);
  // Wow! Elegant! And notice the arrow function's `this` is the same `this`
  // that printCard has; specifically, the `thisArg` that was passed to it
  this.signatories.forEach((signatory) =>
    console.log(`${this.closing[signatory]}, ${signatory}`)
  );
};

printCard3.call(messageConfig);