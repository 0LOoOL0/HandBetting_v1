import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../models/card';
import { CommonModule } from '@angular/common';
//import { CdkDrag, CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-gamepage',
  imports: [CommonModule],
  templateUrl: './gamepage.component.html',
  styleUrl: './gamepage.component.scss'
})
export class GamepageComponent {

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  //initializing cards
  numberCards: Card[] = [
    { title: 'Card 1', url: '../images/Tile_1.png', value: 1, quantity: 4 },
    { title: 'Card 2', url: '../images/Tile_2.png', value: 2, quantity: 4 },
    { title: 'Card 3', url: '../images/Tile_3.png', value: 3, quantity: 4 },
    { title: 'Card 4', url: '../images/Tile_4.png', value: 4, quantity: 4 },
    { title: 'Card 5', url: '../images/Tile_5.png', value: 5, quantity: 4 },
    { title: 'Card 6', url: '../images/Tile_6.png', value: 6, quantity: 4 },
    { title: 'Card 7', url: '../images/Tile_7.png', value: 7, quantity: 4 },
    { title: 'Card 8', url: '../images/Tile_8.png', value: 8, quantity: 4 },
    { title: 'Card 9', url: '../images/Tile_9.png', value: 9, quantity: 4 }
  ];

  dragonCard: Card[] = [
    { title: 'Dragon 1', url: '../images/Tile_Dragon1.png', value: 5, quantity: 3 },
    { title: 'Dragon 2', url: '../images/Tile_Dragon2.png', value: 5, quantity: 3 },
    { title: 'Dragon 3', url: '../images/Tile_Dragon3.png', value: 5, quantity: 3 }
  ];

  windCard: Card[] = [
    { title: 'Wind E', url: '../images/Tile_E.png', value: 5, quantity: 4 },
    { title: 'Wind S', url: '../images/Tile_S.png', value: 5, quantity: 4 },
    { title: 'Wind W', url: '../images/Tile_W.png', value: 5, quantity: 4 },
    { title: 'Wind N', url: '../images/Tile_N.png', value: 5, quantity: 4 }
  ];

  displayedCards: Card[] = [];
  botCards: Card[] = [];
  botsCardsVisible: boolean = false;

  totalPlayerValue: number = 0;
  totalBotValue: number = 0;

  discardCard = { title: 'Discard Pile', url: '../images/Tile_1.png', value: 0 };
  drawCard = { title: 'Draw Pile', url: '../images/Tile_Back.png', value: 0 };

  // drawPile: Card[] = [];
  // discardPile: Card[] =[];
  // playerHand: Card[] = [];

  // Randomize the cards when page displays
  ngOnInit() {
    // this.randomizeCards();
    // this.randomizeBotCards();
    this.calculateTotalValue();
    this.createDeck();
    this.shuffleDeck();
    this.dealCards();
  }

  // function to randomize cards
  // randomizeCards() {
  //   const combinedCards = [...this.numberCards, ...this.dragonCard, ...this.windCard];
  //   this.shuffleArray(combinedCards);
  //   this.displayedCards = combinedCards.slice(0, 10); // Select the first 10 cards
  // }

  // //function randomize card for Bots
  // randomizeBotCards() {
  //   const combinedCards = [...this.numberCards, ...this.dragonCard, ...this.windCard];
  //   this.shuffleArray(combinedCards);
  //   this.botCards = combinedCards.slice(0, 10); // Select the first 10 cards for the bot
  // }

  // shuffleArray(array: Card[]) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]]; // Swap
  //   }
  // }


  calculateTotalValue() {
    this.totalPlayerValue = this.displayedCards.reduce((sum, card) => sum + card.value, 0);
    this.totalBotValue = this.botCards.reduce((sum, card) => sum + card.value, 0);
  }


  //

  shuffleDeck() {
    for (let i = this.fullDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.fullDeck[i], this.fullDeck[j]] = [this.fullDeck[j], this.fullDeck[i]];
    }
  }

  dealCards() {

    for (let i = 0; i < 10; i++) {
      const playerCard = this.drawCardFromDeck();
      const botCard = this.drawCardFromDeck();

      if (playerCard) this.displayedCards.push(playerCard);
      if (botCard) this.botCards.push(botCard);
    }

  }

  drawCardFromDeck(): Card | undefined {
    return this.fullDeck.pop();
  }

  // hide bots cards
  toggleBotCards() {
    this.botsCardsVisible = !this.botsCardsVisible;
  }

  fullDeck: Card[] = [];

  createDeck() {
    this.fullDeck = [];

    const allCards = [
      ...this.numberCards,
      ...this.dragonCard,
      ...this.windCard
    ];

    allCards.forEach(card => {
      for (let i = 0; i < card.quantity; i++) {
        this.fullDeck.push({ ...card }); // clone card
      }
    });
  }




}
