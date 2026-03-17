console.log("Program started.......");
const timeoutId=setTimeout(()=>{
    console.log("This logs after 3 seconds");
},3000);

let count=0;
const intervalId=setInterval(()=>{
    //console.log("Interval count:",count);
    count++;
    console.log("Interval count:",count);
    // while(count<297){
    //     console.log("Count is",count)
    //     count++;
    // };
    if(count===1000){
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
},100);
setTimeout(()=>{
    clearTimeout(timeoutId);
    console.log("Timeout cleared !!!!!");
},4000);
