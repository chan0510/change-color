let para1=document.querySelector("#para1");
let btn=document.querySelector(".btn");
let div=document.querySelector("#box");
let para2=document.querySelector("#para2");
btn.addEventListener("click",()=>{
  let red=Math.floor(Math.random()*255);
  let green=Math.floor(Math.random()*255);
  let blue=Math.floor(Math.random()*255);
  let rgb=`rgb(${red}, ${green}, ${blue})`;
  para2.innerText=rgb;
  div.style.backgroundColor=rgb;
  div.style.boxShadow=`10px 10px 10px rgb`;
  btn.style.color=rgb;
  para1.style.color=rgb;
});