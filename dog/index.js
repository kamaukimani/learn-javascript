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
//Given an input array of n elements, the worst case scenario is that the algorithm needs to
//make n iterations

//....
// o(n)
//....

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

//Given an input array of n elements, the worst case scenario is that the algorithm needs to
//make log n iterations.

//....
// o(log n)
//....
function findStock(sortedArray){
    let start=0;
    let end=sortedArray.length;
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(sortedArray[mid]==="sock") return "sock";
        if(sortedArray[mid]< "sock") {
            start=mid+1;
        }else{
            end=mid-1
        }
    }
}
//Binary search algorithm
//helps to quickly find elements in a sorted array

function binarySearch(arr,target){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(arr[mid]===target)return target;
        if(arr[mid]<target){
            start=mid+1;
        }else{
            end=mid-1;
        }
    }
    return "THE SEARCH ARGUMENT ENTERED DOES NOT EXIST IN THE CURRENT SEARCH LIST";
};
const nameArray=['Alex','Brian','Cate','David','Ephantus','Felix','Gabriel','Hana'];

//Given an input object of n key-value pairs, the worst case scenario is that the algorithm
//takes 1 step to find the correct element.

//....
//   o(1)
//....

//CONSTANT TIME ==>OBJECT
const obj={
    shirts:true,
    shorts:true,
    socks:true,
    pants:true
}
function findLaundry(laundry){
    if(laundry.socks)return "Socks have been found"
};
