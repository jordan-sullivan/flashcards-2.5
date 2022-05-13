const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
    this.currentCard;
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    }
    returnCurrentCard() {
        return (this.currentCard = this.deck[this.turns]);
    }
    takeTurn(guess) {
        var currentCard = this.returnCurrentCard();
        var turn = new Turn(guess, currentCard);
        this.turns++;
        if (turn.giveFeedback() === "Incorrect 😩 ") {
          this.incorrectGuesses.push(this.currentCard.id);
        }
        return turn.giveFeedback();
    }
    calculatePercentCorrect() {
        var num = this.turns - this.incorrectGuesses.length;
        var percentCorrect = (num / this.turns) * 100;
        return percentCorrect;
    }
    endRound() {
        var percentCorrectMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
        console.log(percentCorrectMessage);
        console.timeLog(" ⏰ Game Run Time");
        console.log("🤓 Thanks for playing FLASHCARDS! ");
        return percentCorrectMessage;
    }
}
module.exports = Round;