import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input() model: any;
  @Input() canTurn: boolean;
  @Output() flipEmitter = new EventEmitter();

  private backSide = 'card-back';

  public activeSide: string;

  public clickHandler() {
    if (this.canTurn && !this.model.found) {
      this.model.flipped = !this.model.flipped;
      this.flipEmitter.emit(this.model);
    }
  }

  public turnCardOver() {}

  constructor() {}

  ngOnInit() {
    this.activeSide = this.model.flipped ? `card-${this.model.figure}` : this.backSide;
  }

}
