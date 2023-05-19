var randomNumb1 = Math.floor(Math.random()*6) + 1
var randomNumb2 = Math.floor(Math.random()*6) + 1

var randomDice1 = "dice" + randomNumb1 + ".png"
var randomDice2 = "dice" + randomNumb2 + ".png"


var dice1 = document.getElementsByClassName("img1")[0]
var dice2 = document.getElementsByClassName("img2")[0]

dice1.setAttribute("src", "./images/" + randomDice1)
dice2.setAttribute("src", "./images/" + randomDice2)

if (randomNumb1 > randomNumb2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins"
} else if (randomNumb1 === randomNumb2){
    document.querySelector("h1").textContent = "Draw!"
} else {
    document.querySelector("h1").textContent = "Player 2 Wins 🚩"
}