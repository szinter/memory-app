import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input() figure: string;
  @Input() canTurn: number;
  @Input() found: boolean;
  @Output() flipEmitter = new EventEmitter();

  private backSide = 'card-back';

  private isTurnedOver = false;

  public activeSide = this.backSide;

  public turnFaceDown() {
    this.isTurnedOver = false;
    this.turnCardOver();
  }

  public clickHandler() {
    if (+this.canTurn) {
      this.turnCardOver();
    }
  }

  public turnCardOver() {
      this.isTurnedOver = !this.isTurnedOver;
      this.activeSide = this.isTurnedOver ? `card-${this.figure}` : this.backSide;
      this.flipEmitter.emit(this);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
