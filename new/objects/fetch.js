console.log("Am connected!!!");
const init = () => {
    const form=document.querySelector("form");
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
  
}

document.addEventListener('DOMContentLoaded', init);