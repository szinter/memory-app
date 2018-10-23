import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.less']
})
export class CardTableComponent implements OnInit {
  public canTurn = 1;
  public cards = [
    {figure: 'jenkins', found: false, id: 0, flipped: 0},
    {figure: 'react', found: false, id: 1, flipped: 0},
    {figure: 'ts', found: false, id: 2, flipped: 0},
    {figure: 'supercharge', found: false, id: 3, flipped: 0}
  ];

  private MAX_FACING_CARDS = 2;

  private facingCards = [];
  private turnBackFacingCards() {
      this.cards[this.facingCards[0]].flipped = 0;
      this.cards[this.facingCards[1]].flipped = 0;
  }

  public cardFlippedHandler(card) {
    if (+card.isTurnedOver) {
      this.cards[card.id].flipped = 0;
      if (this.facingCards.indexOf(card.id) > -1) {
        this.facingCards.splice(this.facingCards.indexOf(card.id), 1);
      }
    } else {
      this.cards[card.id].flipped = 1;
      if (this.facingCards.indexOf(card.id) === -1) {
        this.facingCards.push(card.id);
      }

      if (this.facingCards.length >= this.MAX_FACING_CARDS) {
        this.canTurn = 0;
        this.turnBackFacingCards();
      }
    }
    console.log('card Flipped', this.cards);
    console.log(this.facingCards);
  }

  constructor() { }

  ngOnInit() {
  }
}
