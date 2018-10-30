import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CardsModel } from '../cards.model';

@Component({
  selector: 'app-restart',
  templateUrl: './restart.component.html',
  styleUrls: ['./restart.component.less']
})
export class RestartComponent implements OnInit {
  @Output() restart: EventEmitter<boolean> = new EventEmitter<boolean>();

  public resetGame() {
    this.restart.emit(true);
  }

  constructor(private cardsModel: CardsModel) { }

  ngOnInit() {
  }

}
