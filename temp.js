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