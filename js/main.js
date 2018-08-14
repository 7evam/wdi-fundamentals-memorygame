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
  suit:"Diamonds",
  cardImage:"images/king-of-diamonds.png"
}
];
var cardsInPlay=[];

var createBoard = function(){
  for (var i=0; i<cards.length; i++){
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src","images/back.png");
    cardElement.setAttribute("data-id",i);
    cardElement.addEventListener("click",flipCard);
    var gameBoard = document.getElementById("game-board");
    gameBoard.appendChild(cardElement);
  }
}

var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else if(cardsInPlay.length === 2 && cardsInPlay[0]){
  alert("Sorry, try again.");
} else{
  return;
}
}

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
