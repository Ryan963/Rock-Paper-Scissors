var userScore = 0
var computerScore = 0
const userSpan = document.getElementById('user-score')
const computerSpan = document.getElementById('computer-score')
const scoreboard_div = document.querySelector('.score-board')
const results_div = document.querySelector(".results > p")
const rock_div = document.querySelector("#r")
const paper_div = document.querySelector('#p')
const scissors_div = document.querySelector("#s")

function computerChoice(){
    var choices = ['r','p','s']
    var randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}
function converter(letter){
    if (letter==='r'){ return 'Rock'}
    if (letter === 'p'){ return 'Paper'}
    if (letter === 's') {return 'scissors'}
}
function wins(userChoice, computer_choice) {
    userScore++
    userSpan.innerHTML = userScore
    let smallUser = 'user'.fontsize(3).sub();
    let smallComp = 'comp'.fontsize(3).sub();
    results_div.innerHTML = converter(userChoice) +smallUser+' beats ' + converter(computer_choice)+smallComp+'. You win!'
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')}, 400)
    document.getElementById(userChoice).classList.add('transition-user')
    setTimeout(function(){document.getElementById(userChoice).classList.remove('transition-user')}, 2000)
    document.getElementById(computer_choice).classList.add('transition-comp')
    setTimeout(function(){document.getElementById(computer_choice).classList.remove('transition-comp')}, 2000)
}
function loses(userChoice, computer_choice){
    computerScore++
    computerSpan.innerHTML= computerScore
    let smallUser = 'user'.fontsize(3).sub();
    let smallComp = 'comp'.fontsize(3).sub();
    results_div.innerHTML = converter(computer_choice) +smallComp+' beats ' + converter(userChoice)+smallUser+'. You lost! '
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')}, 400)
    document.getElementById(userChoice).classList.add('transition-user')
    setTimeout(function(){document.getElementById(userChoice).classList.remove('transition-user')}, 2000)
    document.getElementById(computer_choice).classList.add('transition-comp')
    setTimeout(function(){document.getElementById(computer_choice).classList.remove('transition-comp')}, 2000)
   
}

function draw(userChoice, computer_choice){
    let smallUser = 'user'.fontsize(3).sub();
    let smallComp = 'comp'.fontsize(3).sub();
    results_div.innerHTML = converter(userChoice) + smallUser + ' equals '+ converter(computer_choice) + smallComp+'. Draw!'
    document.getElementById(userChoice).classList.add('blue-glow')
    setTimeout(function(){document.getElementById(userChoice).classList.remove('blue-glow')}, 400)
    document.getElementById(userChoice).classList.add('transition-user')
    setTimeout(function(){document.getElementById(userChoice).classList.remove('transition-user')}, 1000)
    document.getElementById(computer_choice).classList.add('transition-comp')
    setTimeout(function(){document.getElementById(computer_choice).classList.remove('transition-comp')}, 1000)
   
}
function game(userChoice){
    var computer_choice = computerChoice()
    switch (userChoice + computer_choice){
        case 'rs':
        case 'sp':
        case 'pr':
            wins(userChoice, computer_choice)
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            loses(userChoice, computer_choice)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computer_choice)
            break;
    }
}
function play(){
    rock_div.addEventListener("click", function(){
        game('r')
    })
    paper_div.addEventListener("click", function(){
        game('p')
    })
    scissors_div.addEventListener("click", function(){
        game('s')
    })
}

play()