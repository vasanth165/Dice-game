var randomNumberPlayer1 = Math.floor((Math.random() * 6) + 1);
var randomNumberPlayer2 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumberPlayer1 + ".png")
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumberPlayer2 + ".png")

if (randomNumberPlayer1 > randomNumberPlayer2) {
    document.querySelector("h1").textContent = "Player 1 Wins!"
}
else if (randomNumberPlayer1 < randomNumberPlayer2) {
    document.querySelector("h1").textContent = "Player 2 Wins!"
}
else {
    document.querySelector("h1").textContent = "Draw!"
}