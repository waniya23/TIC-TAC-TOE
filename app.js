let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn=document.querySelector(".new");
let msgcont=document.querySelector(".winDisplay");
let msg=document.querySelector("#msg");
let turnx=true;
let winidx=[
 [0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];
 
const reset =()=>{
turnx=true;
msgcont.classList.add("hide");
    boxenabled();
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turnx){
            box.innerText="X";
            turnx=false;
        }else{
            box.innerText="O";
            turnx=true;
        }
        box.disabled=true;
        winner ();
    })
})
const boxenabled =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const boxdisabled =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const displaywinner=(winner)=>{
    msg.innerText=`CONGRATS, ${winner} is the winner`;
    msgcont.classList.remove("hide");
    boxdisabled ();

}
const areboxesfull=()=>{
    for(let box of boxes){
        if(box.innerText===""){
            return false;
        }
    }
    return true;
}
const winner =()=>{
for(let i of winidx){
    let val1=boxes[i[0]].innerText;
    let val2=boxes[i[1]].innerText;
    let val3=boxes[i[2]].innerText;

    if(val1!="" && val2!="" && val3!=""){

        if(val1===val2 && val2===val3){
            console.log("winner",val1);
            displaywinner (val1);
        }
    }
}



if(areboxesfull()){

    msg.innerText="IT'S A DRAW";
    msgcont.classList.remove("hide");
    boxdisabled();
}}
newbtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);