console.log("Are we connected to learn on forms???");
const form=document.querySelector("#form");
console.log(form);
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const owner=document.querySelector("#owner").value;
    //console.log(owner);
    const address=document.querySelector("#address").value;
    //console.log(address);
    const dogName=document.querySelector("#dogName").value;
    //console.log(dogName);
    const dogAge=document.querySelector("#dogAge").value;
    //console.log(dogAge);
    fetch("http://localhost:3000/dogs",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify({
            owner:owner,
            address:address,
            dogName:dogName,
            dogAge:dogAge
        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        form.reset()
    })
    .catch(error=>console.log(error.message))
})
const formGet=document.querySelector("#form-get");
console.log(formGet);
formGet.addEventListener("submit",(event)=>{
    event.preventDefault()
    const owner=document.querySelector("#owner-get").value;
    console.log(owner);
    const address=document.querySelector("#address-get").value;
    console.log(address);
    const dogName=document.querySelector("#dogName-get").value;
    console.log(dogName);
    const dogAge=document.querySelector("#dogAge-get").value;
    console.log(dogAge);
    fetch(`http://localhost:3000/dogs?owner=${owner}&address=${address}&dogName=${dogName}&dogAge=${dogAge}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        formGet.reset()
    })
    .catch(error=>console.log(error.message))
 })
