//set up card array
var cards = [
{
  rank:"queen",
  suit:"hearts",
  cardImage:"images/queen-of-hearts.png"
},
{
  rank:"queen",
  suit:"diamonds",
  cardImage:"images/queen-of-diamonds.png"
},
{
  rank:"king",
  suit:"hearts",
  cardImage:"images/king-of-hearts.png"
},
{
  rank:"king",
  suit:"diamonds",
  cardImage:"images/king-of-diamonds.png"
}
];

var cardsInPlay=[];

//set up variables for scoreboard
var success="0";
var tries="0";

//Fisher-Yates Shuffle
function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

//create the board
var createBoard = function(){
  shuffle(cards);
  for (var i=0; i<cards.length; i++){
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src","images/back.png");
    cardElement.setAttribute("data-id",i);
    cardElement.addEventListener("click",flipCard);
    var gameBoard = document.getElementById("game-board");
    gameBoard.appendChild(cardElement);
  }
}

//check if cards match
var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log(cardsInPlay);
  alert("You found a match!");
  success = parseInt(success)+1;
  tries = parseInt(tries)+1;
  updateScore();
  setTimeout(function(){
    resetBoard();
  }, 600);
} else if(cardsInPlay.length === 2 && cardsInPlay[0]){
  alert("Sorry, try again.");
  tries = parseInt(tries)+1;
  updateScore();
  setTimeout(function(){
    resetBoard();
  }, 600);
} else{
  return;
}
}

//reset board (no randomization)
var resetBoard = function(){
  cardsInPlay.pop();
  cardsInPlay.pop();
  var images = document.getElementsByTagName("img");
  for(var i=0; i<cards.length; i++){
    images[i].setAttribute("src","images/back.png");
  }

}

var flipCard = function(){
  var cardId = this.getAttribute("data-id");
  console.log("User flipped "+cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log("image: "+cards[cardId].cardImage);
  console.log("suit: "+cards[cardId].suit);
  this.setAttribute("src",cards[cardId].cardImage);
  checkForMatch();
}

createBoard();
var getScore = document.getElementById("score");
var updateScore = function(){
  getScore.innerHTML=success+"/"+tries;
}

var resetBtn = document.getElementById("reset");

//resets everything AND randomizes
var resetAll = function(){
  var c = confirm("Are you sure? This will reset the board AND your score!");
  if(c){
    resetBoard();
    var images = document.getElementsByTagName("img");
    for (var i = 0; i <cards.length; i++) {
      images[0].parentNode.removeChild(images[0]);
  }
    createBoard();
    tries="0";
    success="0";
    updateScore();
  } else{
    return;
  }
}

resetBtn.addEventListener("click",resetAll);

updateScore();
