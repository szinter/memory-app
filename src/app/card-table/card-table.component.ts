import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.less']
})
export class CardTableComponent implements OnInit {
  public canTurn = 1;
  public cards = [
    {figure: 'jenkins', found: false, id: 1, flipped: false},
    {figure: 'react', found: false, id: 2, flipped: false},
    {figure: 'ts', found: false, id: 3, flipped: false},
    {figure: 'supercharge', found: false, id: 4, flipped: false}
  ];

  private MAX_FACING_CARDS = 2;

  private facingCards = [];
  private turnBackFacingCards() {
    window.setTimeout(() => {
    
    }, 500);
  }

  public cardFlippedHandler(card) {
    if (card.isTurnedOver) {
      this.facingCards.push(card.id);

      if (this.facingCards.length === this.MAX_FACING_CARDS) {
        this.canTurn = 0;
        this.turnBackFacingCards();
      }
    } else {

    }
    console.log('card Flipped', card);
  }

  constructor() { }

  ngOnInit() {
  }
}
