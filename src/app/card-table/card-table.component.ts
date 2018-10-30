import { Component, OnInit, EventEmitter } from '@angular/core';
import { CardsModel } from '../cards.model';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.less']
})
export class CardTableComponent implements OnInit {
  public canTurn = true;
  private cards;

  private MAX_FACING_CARDS = 2;
  private facingCardsCount = 0;

  private isMaxCardsFacing() {
    return this.facingCardsCount >= this.MAX_FACING_CARDS;
  }

  private isPairFound() {
    const facingCards = this.cards.filter((card) => {
      return card.flipped && !card.found;
    });
    const sameFiguredCards = facingCards.filter((card) => card.figure === facingCards[0].figure);
    return sameFiguredCards.length === facingCards.length;
  }

  private markFoundPair() {
    this.cards.forEach((card) => {
      if (card.flipped && !card.found) {
        card.found = true;
        this.cardsModel.updateCardInList(card);
      }
    });

    this.facingCardsCount = 0;
  }

  private turnBackFacingCards() {
    setTimeout(() => {
      this.cards.forEach((card) => {
        if (!card.found && card.flipped) {
          card.flipped = false;
          this.cardsModel.updateCardInList(card);
        }
      });

      this.facingCardsCount = 0;
      this.canTurn = true;
    }, 500);
  }

  private onNewCardsGenerated(cards) {
    this.cards = [];
    this.cards = cards;
  }

  public cardFlippedHandler(card) {
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

    this.cardsModel.updateCardInList(card);
  }

  constructor(private cardsModel: CardsModel) {
    this.cardsModel.cardsGenerrated.subscribe((cards) => this.onNewCardsGenerated(cards));
  }

  ngOnInit() {}
}
