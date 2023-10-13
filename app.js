const paperbtn = document.getElementById("paper")
const rockbtn = document.getElementById("rock")
const scissorbtn = document.getElementById("scissor")
const imgInsert = document.getElementById("imageInsert")
const copmInsert = document.getElementById("compInsertImg")
var userScore = 0
var computerScore = 0
var user = document.getElementById("team1score")
var computer = document.getElementById("team2score")

paperbtn.addEventListener(('click'),()=>{
    imgInsert.innerHTML = `<img src="./assets/paper-hand.png" class="image">`
    compImg(0)
})
rockbtn.addEventListener(('click'),()=>{
    imgInsert.innerHTML = `<img src="./assets/rock-hand.png" class="image">`
    compImg(1)
})
scissorbtn.addEventListener(('click'),()=>{
    imgInsert.innerHTML = `<img src="./assets/scissors-hand.png" class="image">`
    compImg(2)
})
const names = ['paper','rock','scissor']
const imgList = ['<img src="./assets/paper-hand.png" class="image">','<img src="./assets/rock-hand.png" class="image">','<img src="./assets/scissors-hand.png" class="image">']
var flag;
function compImg(input){
    let num = Math.floor(Math.random()*3)
    flag = num
    copmInsert.innerHTML = imgList[num]
    checkValue(input,flag)
    }



function checkValue(you,comp){
    if(names[you] === 'paper'){
        if(names[comp] === 'rock'){
            userScore++
        }else if(names[comp] === 'scissor'){
            computerScore++
        }
        displayScore()
    }
    if(names[you] === 'rock'){
        if(names[comp] === 'scissor'){
            userScore++
        }else if(names[comp] === 'paper'){
            computerScore++
        }
        displayScore()

    }
    if(names[you] === 'scissor'){
        if(names[comp] === 'paper'){
            userScore++
        }else if(names[comp] === 'rock'){
            computerScore++
        }
        displayScore()
    }
}

const resultDiv = document.getElementById("result")
function displayScore(){
    if(userScore>=5 || computerScore>=5){
        resultDiv.style.display= "flex"
        paperbtn.style.display = "none"
        scissorbtn.style.display = "none"
        rockbtn.style.display = "none"
        user.innerHTML = userScore
        computer.innerHTML = computerScore

        if(userScore>computerScore){
            document.querySelector('#whoWon').textContent="You Won!"
        }else{
            document.querySelector('#whoWon').textContent="Computer won! Try again."
        }
    }else{
        user.innerHTML = userScore
        computer.innerHTML = computerScore
    }
}


function replay(){
    location.reload();
}