console.log("Some DOM manipulation!!");
const element=document.createElement("div");
console.log(element);
document.body.append(element);
const ul=document.createElement("ul");
console.log(ul);
for(let i=0;i<3;i++){
    const li=document.createElement("li");
    console.log(i);
    li.textContent=(i+1).toString();
    ul.append(li);
}
element.append(ul);
const main=document.getElementById("main");
console.log(main);
main.innerHTML=`
    <h1>Poodles</h1>
    <h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3>
    <p><em>By: Byron Q. Poodle, Esq., BA.</em></p>
`
const diva=document.createElement("div");
const ol=document.createElement("ol");
ol.style.listStyle="lower-roman";
for(let i=0;i<5;i++){
    const li=document.createElement("li");
    li.textContent=(i+1).toString();
    ol.append(li);
}
diva.append(ol);
main.append(diva);
//ol.remove();

const input =document.getElementById("button");
// console.log(input);
// input.addEventListener("mouseover",()=> console.log("Mouse is over me!!"));
// input.addEventListener("mouseout",()=> console.log("Mouse is out now"));
// let count=0
// input.addEventListener("click",()=>{
//     if(count<10){
//         count++;
//         console.log("Count is:",count);
//     }
// })
// input.addEventListener("click",(e)=>{
//     console.log(e.target);
// })
// input.addEventListener("click",()=> alert("YOU HAVE CLICKED ME!!!"))
function clickAlert(){
    alert("Hee hee.That tickles!!!");
}
input.addEventListener("click",clickAlert);
