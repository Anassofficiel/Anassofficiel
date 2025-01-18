let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelectorAll(".msgcontainer");
let msg=document.querySelectorAll(".msg");
let newGameBtn=document.querySelectorAll(".draw");

let turn0=true;

const winpatterns= [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

const resetGame=()=>{
    turn0=true;
    enableboxes();
    msg.classlist.add("hide");
    newGameBtn.classlist.add("hide");
}
const disableBoxes=()=>{
   for(let box of boxes){
    box.disabled=true;
}
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";}
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    console.log("button was clicked ")
        if(turn0){
            box.innerText="0";
            box.style.color="blue";
            turn0=false;
        }
        else {
            box.innerText="X";
            box.style.color="red";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const showNew=()=>{
   newGameBtn.classlist.remove("hide")
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations ${winner} Won`;
    msg.classList.remove("hide");
    disableBoxes();
};






const checkWinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes
        [pattern[0]].innerText;
        let pos2val=boxes
        [pattern[1]].innerText;
        let pos3val=boxes
        [pattern[2]].innerText;
        
        if (pos1Val !=""&&
            pos2Val !=""&&
            pos3Val !=""){

        if (pos1val===pos2val &&
pos2val===pos3val){
    console.log("winner", pos1val);
    showWinner(pos1val);
    showNew();
 }
}
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);