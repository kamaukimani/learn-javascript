console.log("Am i connected?");
const div=document.createElement("div");
const p=document.createElement("p")
p.textContent="Can we move things with javascript?";
div.append(p);
document.body.append(div);
const dodger=document.getElementById("dodger");
console.log(dodger);
dodger.style.backgroundColor="#FF69B4";
//dodger.style.bottom="100px";
dodger.style.bottom="0px";
dodger.style.left="100px";
function moveDodgerLeft(){
    const leftNumbers=dodger.style.left.replace("px","");
    const left=parseInt(leftNumbers,10);
    if(left>0){
        dodger.style.left=`${left-1}px`;
    }
};
document.addEventListener("keydown",function(e){
    if(e.key==="ArrowLeft"){
        moveDodgerLeft();
    }
})
function moveDodgerRight(){
    const leftNumbers=dodger.style.left.replace("px","");
    const left=parseInt(leftNumbers,10);
    if(left<360){
        dodger.style.left=`${left+1}px`;
    }
}
document.addEventListener("keydown",function(event){
    if(event.key==="ArrowRight"){
        moveDodgerRight();
    }
})
function moveDodgerUp(){
    const bottomNumbers=dodger.style.bottom.replace("px","");
    const bottom=parseInt(bottomNumbers,10);
    if(bottom<380){
        dodger.style.bottom=`${bottom+1}px`;
    }
}
document.addEventListener("keydown",function(event){
    if(event.key==="ArrowUp"){
        moveDodgerUp();
    }
})
function moveDodgerDown(){
    const bottomNumbers=dodger.style.bottom.replace("px","");
    const bottom=parseInt(bottomNumbers,10);
    if(bottom>0){
        dodger.style.bottom=`${bottom-1}px`;
    }
}
document.addEventListener("keydown",function(event){
    if(event.key==="ArrowDown"){
        moveDodgerDown();
    }
})
const pChange=document.querySelector("#text");
console.log(pChange);
pChange.textContent="This is really cool!!";