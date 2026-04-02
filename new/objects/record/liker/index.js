console.log("A simpler liker application");
const h1=document.getElementById('counter');
console.log(h1);
let intervalId=setInterval(()=>{
    let value=parseInt(h1.textContent)
    value++;
    h1.textContent=value;

},1000)

const minus=document.querySelector("#minus");
console.log(minus);
minus.addEventListener("click",()=>{
    let value=parseInt(h1.textContent);
    console.log(value);
    if(value>0){
        value--
        h1.textContent=value;
    }
})
const plus=document.querySelector("#plus");
console.log(plus);
plus.addEventListener("click",()=>{
    let value=parseInt(h1.textContent);
    console.log(value)
    if(value<20){
        value++;
        h1.textContent=value;
    }
})

const heart=document.querySelector("#heart");
console.log(heart);
const likeList=document.querySelector(".likes");
console.log(likeList);
const likes={}
heart.addEventListener("click",()=>{
    let value=parseInt(h1.textContent);
    if(likes[value]){
        likes[value]++
    }else{
        likes[value]=1
    }
    let existing=document.querySelector(`[data-num="${value}"]`);
    console.log(existing);
    if(existing){
        existing.textContent=`${value} has been liked ${likes[value]} times`;
    }else{
        let li=document.createElement("li");
        li.dataset.num=value;
        li.textContent=`${value} has been liked 1 time`;
        likeList.appendChild(li);
    }
})
const pause=document.querySelector("#pause");
console.log(pause);
let paused=false;
pause.addEventListener("click",()=>{
    if(!paused){
        clearInterval(intervalId);
        pause.textContent="resume";
        minus.disabled=true;
        plus.disabled=true;
        heart.disabled=true;
    }else{
        intervalId=setInterval(()=>{
            let value=parseInt(h1.textContent);
            value++;
            h1.textContent=value;
        },1000)
        pause.textContent="pause";
        minus.disabled=false;
        plus.disabled=false;
        heart.disabled=false;
    }
    paused=!paused;
    
})





const form=document.querySelector("form");
console.log(form);
const commentList=document.getElementById("list");
console.log(commentList);
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let input=document.getElementById("comment-input")
    let div=document.createElement("div")
    let p=document.createElement("p");
    let edit=document.createElement("button");
    edit.textContent="Delete"
    
    p.textContent=input.value;
    div.append(p,edit);
    commentList.append(div)
    input.value="";
    edit.addEventListener("click",handleDelete=>{
        div.remove();
    });
});
