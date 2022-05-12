const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
    constructor(deck, currentCard) {
    this.currentCard;
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return (this.currentCard = this.deck[0]);
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
        return percentCorrectMessage;
    }
}


module.exports = Round;