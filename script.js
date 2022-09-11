/*grid is:
0 1 2
3 4 5
6 7 8*/
/* crossing line rotations:
5 5 0
5 5 15
5 25 0
-5 15 90
5 15 90
5 15 90
5 15 45
5 15 135 */

console.log("Lets play Tic-Tac-Toe")
let turn="X"
let isgameover=false;

//fn to change the turn
const changeTurn=()=>{
    return turn === "X"? "0":"X" // using ternary operator
}

//fn to check for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
let wins=[
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,15,90],
    [1,4,7,5,15,90],
    [2,5,8,5,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135]
]
wins.forEach(e=>{
if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
document.querySelector('.info').innerText=boxtext[e[0]].innerText+"  Won! Yippiee!!"
isgameover=true;
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="150px";
document.querySelector(".line").style.width="20vw"; //initial width of line
document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)` //transformation of line after a win

}
})
}
//Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==='')
        {
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn For "+ turn;
            }
        }
    })
})

//Add onclick listener to reset button 
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""  //after resetting the grids will be empty 
    }); 
    turn ="X";
    isgameover=false //since after resetting the new game is starting
    document.querySelector(".line").style.width="0vw"; //to disappear the line after resetting it
    document.getElementsByClassName("info")[0].innerText="Turn For "+ turn; //after resetting the cursor will start from 0 move
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px" //initially or after the reset the dancing cat won't be displayed
})