console.log("dog fetch");
const image=document.getElementById("dog-image-container");
console.log(image);
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res =>res.json())
.then(data=>{
    dogs=data.message
    for(const dog of dogs){
        const img=document.createElement("img");
        img.src=dog;
        image.append(img)
    }
})


function isPalindrome(name){
    const reverse=name.split("").reverse().join("");
    if(name===reverse){
        return true;
    }else{
        return false;
    }
};

function palindrome(word){
    for(startIndex=0;startIndex<word.length/2;startIndex++){
        const endIndex=word.length-1-startIndex;
        if(word[startIndex]!==word[endIndex]){
            return false;
        }
        return true;
    }
}
