let textbox=document.getElementById("tempinput");
const celciusBtn=document.getElementById("radio1");
const fahreniteBtn=document.getElementById("radio2");
const answer=document.getElementById("answer");
const sub=document.getElementById("subBtn");
let temp;


sub.onclick=function(){
    temp=textbox.value;
    temp=Number(temp);
    if(celciusBtn.checked){
        let result=(temp*9/5)+32;
        answer.textContent=result +  `\u00B0F` ;
    }
    else if(fahreniteBtn.checked){
        let result=(temp-32)*(5/9);
        answer.textContent=result+  `\u00B0C`;
    }
    else{
    answer.textContent=`please select one of the options`;

    }
}
function roll(){
    const numOfDice=document.getElementById("diceNum").value;
    const diceResult=document.getElementById("diceResult");
    const diceImages=document.getElementById("diceImages");
    const values=[];
    const images=[];
    for(let i=0;i<numOfDice;i++){
        let value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="${value}.png">`);
    }
    diceResult.textContent=`${values}`;
    diceImages.innerHTML=images.join(" ");


}


function updateClock(){

       const now=new Date();
       let hours=now.getHours();
       const m=hours>=12?"PM":"AM";
       hours=hours%12||12;
       hours=hours.toString().padStart(2,0);
       const minutes=now.getMinutes().toString().padStart(2,0);
       const seconds=now.getSeconds().toString().padStart(2,0);
const display=`${hours}:${minutes}:${seconds} ${m}`;
document.getElementById("clock").textContent=display;

}
updateClock();
setInterval(updateClock,1000);
 let hours=0;
    let minutes=0;
    let seconds=0;
    let microseconds=0;
    let interval=null;
function run(){
    microseconds++;
    if(microseconds===100){
        seconds++;
        microseconds=0;
    }
    if(seconds==60){
        minutes++;
        seconds=0;
    }
    if(minutes==60){
        hours++;
        minutes=0;
    }
const displayWatch =
    `${hours.toString().padStart(2, '0')}:` +
    `${minutes.toString().padStart(2, '0')}:` +
    `${seconds.toString().padStart(2, '0')}:` +
    `${microseconds.toString().padStart(2, '0')}`;
   document.getElementById("stopWatch").textContent=displayWatch;



   
}

function startWatch(){
   if(interval) return;
   interval=setInterval(run ,10)
  
 
}

function resettWatch(){
    clearInterval(interval);
interval=null;
    hours = minutes = seconds = microseconds = 0;
    document.getElementById("stopWatch").textContent = "00:00:00:00";



}
function stopWatch() {
  clearInterval(interval);
  interval = null;
}




