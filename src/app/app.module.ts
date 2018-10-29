import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardTableComponent } from './card-table/card-table.component';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './score/score.component';
import { RestartComponent } from './restart/restart.component';
import { StartComponent } from './start/start.component';
import { PairCountComponent } from './pair-count/pair-count.component';
import { HomeComponent } from './home/home.component';
import { CardsModel } from './cards.model';

const appRouts: Routes = [
  {path: '', component: HomeComponent},
  {path: 'game', component: GameComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardTableComponent,
    GameComponent,
    ScoreComponent,
    RestartComponent,
    StartComponent,
    PairCountComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [CardsModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
