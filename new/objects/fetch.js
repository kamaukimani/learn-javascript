console.log("Am connected!!!");
const form=document.querySelector("#form");
console.log(form);
form.addEventListener("submit",function(e){
    e.preventDefault();
        //console.log(e.target.children[1].value);
    const input=document.querySelector("#searchByID")
    console.log(input.value);
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response=>response.json())
    .then(data=>{
        const title=document.querySelector("section#movieDetails h4");
            
        title.textContent=data['title'];
        console.log(title);
        const summary=document.querySelector("section#movieDetails p");
        summary.innerText=data.summary;
        console.log(summary);
    });
})
    
const form1=document.getElementById("form1");
console.log(form1);
form1.addEventListener("submit",e=>{
    e.preventDefault();
    const dogName=document.querySelector("#dogName").value;
    //console.log(dogName);
    const dogBreed=document.querySelector("#dogBreed").value;
    //console.log(dogBreed);
        
    fetch("http://localhost:3000/dogs",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify({
            dogName:dogName,
            dogBreed:dogBreed,
        })
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error.message))
})
  
