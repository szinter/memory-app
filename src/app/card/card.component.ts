import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input() figure: string;
  @Input() canTurn: boolean;
  @Input() found: boolean;

  private backSide = 'card-back';

  private isTurnedOver = false;

  public activeSide = this.backSide;

  public turnCardOver() {
    this.isTurnedOver = !this.isTurnedOver;

    this.activeSide = this.isTurnedOver ? `card-${this.figure}` : this.backSide;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
