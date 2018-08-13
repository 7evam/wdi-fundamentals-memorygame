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

var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else if(cardsInPlay.length === 2 && cardsInPlay[0]){
  console.log("Sorry, try again.");
} else{
  return;
}
}

var flipCard = function(cardId){
  console.log("User flipped "+cards[cardId].rank)
  cardsInPlay.push(cards[cardId].rank);
  console.log("image: "+cards[cardId].cardImage);
  console.log("suit: "+cards[cardId].suit);
  checkForMatch();
}
flipCard(0);
flipCard(1);
