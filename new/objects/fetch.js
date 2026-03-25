console.log("Am connected!!!");
const init = () => {
    const form=document.querySelector("form");
    console.log(form);
    form.addEventListener("submit",function(e){
        e.preventDefault();
    })
  
}

document.addEventListener('DOMContentLoaded', init);