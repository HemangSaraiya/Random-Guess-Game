const ans=document.getElementById("answer");
const dis=document.getElementById("display");
const sub=document.getElementById("submit");
const res=document.getElementById("reset");

let count=0;
let randomNum=Math.floor(Math.random()*100)+1;
console.log(randomNum);
sub.onclick=function(){
if(dis.value == randomNum){
    count++;
    ans.textContent=`Congratulations!! You guess the Number in ${count} guesses`;
    dis.value=``;
}
else if(dis.value<0 || dis.value>100){
    window.alert("Please Guess The Number between 1 to 100");
    dis.value=``;
}
else if(dis.value >= randomNum){
    ans.textContent="Please Guess smaller Number, Your Number is Larger";
    count++;
    dis.value=``;
}
else if(dis.value <= randomNum){
    ans.textContent="Please Guess larger Number, Your Number is smaller";
    count++;
    dis.value=``;
}}

res.onclick=function(){
    window.location.reload();
}
document.addEventListener("keydown",event=>{
if(event.key.startsWith("Enter")){
   if(dis.value == randomNum){
    count++;
    ans.textContent=`Congratulations!! You guess the Number in ${count} guesses`;
    dis.value=``;
}
else if(dis.value<0 || dis.value>100){
    window.alert("Please Guess The Number between 1 to 100");
    dis.value=``;
}
else if(dis.value >= randomNum){
    ans.textContent="Please Guess smaller Number, Your Number is Larger";
    count++;
    dis.value=``;
}
else if(dis.value <= randomNum){
    ans.textContent="Please Guess larger Number, Your Number is smaller";
    count++;
    dis.value=``;
} 
}
}
);
