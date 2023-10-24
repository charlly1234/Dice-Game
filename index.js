var randomNumber1 = Math.floor(Math.random() * 6) +1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}



// function randomNumber1() {
//     var number1 = Math.random();
//     number1 = number1 * 6;
//     number1 = Math.floor(number1) + 1;
//     document.querySelector(".img1").setAttribute("src", "images/dice" + number1 + ".png");

//     var number2 = Math.random();
//     number2 = number2 * 6;
//     number2 = Math.floor(number2) + 1;
//     document.querySelector(".img2").setAttribute("src", "images/dice" + number2 + ".png");
    
//     if (number1 > number2){
//         document.querySelector("h1").innerHTML = "Player 1 wins!";
//     } else if (number1 == number2){
//         document.querySelector("h1").innerHTML = "Draw!";
//     }
//     else document.querySelector("h1").innerHTML = "Player 2 wins!";
// }

// randomNumber1();