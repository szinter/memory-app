import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input() figure: string;
  @Input() id: number;
  @Input() canTurn: number;
  @Input() found: boolean;
  @Input() isTurnedOver: number;
  @Output() flipEmitter = new EventEmitter();

  private backSide = 'card-back';

  public activeSide = this.backSide;

  public clickHandler() {
    if (+this.canTurn) {
      this.turnCardOver();
    }
  }

  public turnCardOver() {
    console.log(this);
      this.flipEmitter.emit(this);
      this.activeSide = !+this.isTurnedOver ? `card-${this.figure}` : this.backSide;
  }

  constructor() {
  }

  ngOnInit() {
    this.activeSide = +this.isTurnedOver ? `card-${this.figure}` : this.backSide;
  }

}
