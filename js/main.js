var cards = ["queen","queen","king","king"];
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
  console.log("User flipped "+cards[cardId])
  cardsInPlay.push(cards[cardId]);
  checkForMatch();
}
flipCard(0);
flipCard(1);
