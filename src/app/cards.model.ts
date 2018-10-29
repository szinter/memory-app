import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CardsModel {
    public someEmmiterThatNeedsANewName: EventEmitter<any> = new EventEmitter<any>();

    private MAX_SIMILAR_CARD_COUNT = 2;

    private allFigures = ['angular',
                       'd3',
                       'jenkins',
                       'postcss',
                       'react',
                       'redux',
                       'sass',
                       'supercharge',
                       'ts',
                       'webpack'];

    private cards = [];

    private figures = [];

    private isCardUnique(card: any) {
        let figureCount = 0;
        for (let i = 0; i < this.cards.length ; i++) {
            if (card.figure === this.cards[i].figure) {
                figureCount++;
            }
        }

        return figureCount < this.MAX_SIMILAR_CARD_COUNT;
    }

    private getFigure() {
        return this.allFigures[Math.round((this.allFigures.length - 1) * Math.random())];
    }

    private getSelectedFigure() {
        return this.figures[Math.round((this.figures.length - 1) * Math.random())];
    }

    private getRandomPairs(pairCount: number) {
        const figures = [];
        while (pairCount > figures.length) {
            const figure = this.getFigure();
            if (figures.indexOf(figure) === -1) {
                figures.push(figure);
            }
        }

        return figures;
    }

    public generateCards(pairCount: number) {
        if (pairCount > this.allFigures.length) {
            throw new Error(`Can't have more pairs than ${this.allFigures.length}`);
        }

        this.figures = this.getRandomPairs(pairCount);

        const cardTemplate = {figure: '', found: false, flipped: false};

        this.cards = [];

        while (this.cards.length < pairCount * 2) {
            const card = Object.assign({}, cardTemplate);
            const figure = this.getSelectedFigure();
            card.figure = figure;
            if (this.isCardUnique(card)) {
                this.cards.push(card);
            }
        }
    }

    public getCards() {
        return this.cards;
    }

    public updateCardInList(card) {
        this.cards[this.cards.indexOf(card)] = JSON.parse(JSON.stringify(card));
    }
}
