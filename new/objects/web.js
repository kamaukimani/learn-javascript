console.log("Introduction to the www!!");
document.addEventListener("DOMContentLoaded",()=>{
    const diva=document.querySelector("#diva");
    console.log(diva);
    const p=document.createElement("p");
    p.textContent="I am going to understand JSON and WWW";
    diva.appendChild(p);
})