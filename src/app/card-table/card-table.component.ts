import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.less']
})
export class CardTableComponent implements OnInit {
  canTurn = true;
  cards = [
    {figure: 'jenkins', found: false, flipped: false},
    {figure: 'react', found: false, flipped: false},
    {figure: 'ts', found: false, flipped: false},
    {figure: 'supercharge', found: false, flipped: false}
    {figure: 'ts', found: false, flipped: false}
  ];

  private MAX_FACING_CARDS = 2;
  private facingCardsCount = 0;

  private isMaxCardsFacing() {
    return this.facingCardsCount >= this.MAX_FACING_CARDS;
  }

  private isPairFound() {
    const facingCards = this.cards.filter((card) => {
      return card.flipped && !card.found;
    });
    const sameFiguredCards = facingCards.filter((card) => card.figure === facingCards[0].figure)
    return sameFiguredCards.length === facingCards.length;
  }

  private markFoundPair() {
    this.cards.forEach((card) => {
      if (card.flipped && !card.found) {
        card.found = true;
        this.updateCardInList(card);
      }
    });

    this.facingCardsCount = 0;
  }

  private updateCardInList(card) {
    this.cards[this.cards.indexOf(card)] = JSON.parse(JSON.stringify(card));
  }

  private turnBackFacingCards() {
    setTimeout(() => {
      this.cards.forEach((card) => {
        if (!card.found && card.flipped) {
          card.flipped = false;
          this.updateCardInList(card);
        }
      });

      this.facingCardsCount = 0;
      this.canTurn = true;
    }, 2000);
  }

  cardFlippedHandler(card) {
    if (card.flipped) {
      this.facingCardsCount++;
    } else {
      this.facingCardsCount--;
    }

    if (this.isMaxCardsFacing()) {
      if (this.isPairFound()) {
        this.markFoundPair();
      } else {
        this.canTurn = false;
        this.turnBackFacingCards();
      }
    }

    this.updateCardInList(card);
  }

  constructor() {}

  ngOnInit() {}
}
