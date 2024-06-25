let computer_move;
let userMove;
let result;
let score=JSON.parse(localStorage.getItem('score'));
let r ='';
console.log(r);

if(score === null){
    score={
        wins: 0,
        losses: 0,
        ties: 0
    }
}

function display(){
    
document.querySelector('.result_paragraph')
    .innerHTML=`wins: ${score.wins}, lose: ${score.losses}, tie: ${score.ties} `;
document.querySelector('.result_')
    .innerHTML= result;
document.querySelector('.pc_moves')
    .innerHTML=`You <img class="move-icon" src="img/${userMove}-emoji.png" alt="">
    <img class="move-icon" src="img/${computer_move}-emoji.png" alt=""> Computer`
}
function computerMoveFun (){
    
let x = Math.random();

if(x>=2/3){
    computer_move='rock';
}else if(x<2/3&&x>1/3){
    computer_move='paper';
}else if(x<=1/3){
    computer_move='scissors'
}
}
function comparing (){
        
    if(computer_move === userMove){
        console.log(`you choose ${userMove} and computer chooses ${computer_move}`)
        result='tie'
        
    }else if(computer_move==='paper'&&userMove=='rock'){
        console.log(`you choose ${userMove} and computer chooses ${computer_move}`)
        result= 'you loose!'
    }else if(computer_move==='rock'&&userMove=='scissors'){
        console.log(`you choose ${userMove} and computer chooses ${computer_move}`)
        result='you loose!'
    }else if(computer_move==='scissors'&&userMove=='paper'){
        console.log(`you choose ${userMove} and computer chooses ${computer_move}`)
        result= 'you loose!'
    }else{
        console.log(`you choose ${userMove} and computer chooses ${computer_move}`)
        result= 'you won!'
    }

    if(result === 'you won!'){
        score.wins++;
    }else if(result === 'you loose!'){
        score.losses++;
    }else if(result === 'tie'){
        score.ties++;
    }
    
    localStorage.setItem('score',JSON.stringify(score));



}

function resetScore (){

    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    document.querySelector('.result_paragraph')
    .innerHTML=`wins: ${score.wins}, lose: ${score.losses}, tie: ${score.ties} `;
   }
//document.body.innerHTML= '<button style="background-color: white;">good job</button>'
console.log(document.querySelector('button').innerText);
document.querySelector('.result_paragraph')
    .innerHTML=`wins: ${score.wins}, lose: ${score.losses}, tie: ${score.ties} `;
   