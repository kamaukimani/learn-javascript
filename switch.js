//const age =23;
//const age =20;
//const age =17;
const age =15;
let isAdult,canWork,canDrink,canEnlist;
switch(true){
    case age >= 21:
        canDrink=true;
    case age >= 18:
        isAdult=true;
        canEnlist=true;
    case age >= 16:
        canWork=true;
    default:
        console.log("You fit nowhere in the switch-case chain....SORRY!!!!!");
};
console.log("Can this person drink?",canDrink);
console.log("Is this person an adult?",isAdult);
console.log("Can this person enlist?",canEnlist);
console.log("Am i elligible to work?",canWork);

//const name="Valentine";
const name="Mimi";
//const name="Aloo";
let greetings;
switch(name){
    default:
        console.log("Default destroys everything!!!!!!!!!!!");
    case "Valentine":
        greetings="Hello Valentine";
        console.log(greetings);
    case "Kinuthia":
        greetings="Kinuthua, niaje?";
        console.log(greetings);
    case "Aloo":
        greetings="Aloo there";
        console.log(greetings);
        //break;
    // default:
    //     //name=name.toUppercase();
    //     greetings=`This ${name} is not familiar here`;
    //     console.log(greetings.toUpperCase());
};
