import { Component, OnInit } from '@angular/core';
import { CardsModel } from '../cards.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

  private PAIRS_COUNT = 10;

  public onRestart() {
    this.cardsModel.generateCards(this.PAIRS_COUNT);
  }

  public onNewGame(pairsCount: number) {
    this.PAIRS_COUNT = pairsCount;
    this.cardsModel.generateCards(this.PAIRS_COUNT);
  }

  constructor(private cardsModel: CardsModel) { }

  ngOnInit() {
    this.cardsModel.generateCards(this.PAIRS_COUNT);
  }

}
