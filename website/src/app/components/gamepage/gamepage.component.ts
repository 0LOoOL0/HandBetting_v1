import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../models/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gamepage',
  imports: [CommonModule],
  templateUrl: './gamepage.component.html',
  styleUrl: './gamepage.component.scss'
})
export class GamepageComponent {

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  //initializing cards
  numberCards: Card[] = [
    { title: 'Card 1', url: '../images/Tile_1.png', value: 1 },
    { title: 'Card 2', url: '../images/Tile_2.png', value: 2 },
    { title: 'Card 3', url: '../images/Tile_3.png', value: 3 },
    { title: 'Card 4', url: '../images/Tile_4.png', value: 4 },
    { title: 'Card 5', url: '../images/Tile_5.png', value: 5 },
    { title: 'Card 6', url: '../images/Tile_6.png', value: 6 },
    { title: 'Card 7', url: '../images/Tile_7.png', value: 7 },
    { title: 'Card 8', url: '../images/Tile_8.png', value: 8 },
    { title: 'Card 9', url: '../images/Tile_9.png', value: 9 }
  ];

  dragonCard: Card[] = [
    { title: 'Dragon 1', url: '../images/Tile_Dragon1.png', value: 5 },
    { title: 'Dragon 2', url: '../images/Tile_Dragon2.png', value: 5 },
    { title: 'Dragon 3', url: '../images/Tile_Dragon3.png', value: 5 }
  ];

  windCard: Card[] = [
    { title: 'Wind E', url: '../images/Tile_E.png', value: 5 },
    { title: 'Wind S', url: '../images/Tile_S.png', value: 5 },
    { title: 'Wind W', url: '../images/Tile_W.png', value: 5 },
    { title: 'Wind N', url: '../images/Tile_N.png', value: 5 }
  ];

  displayedCards: Card[] = [];
  botCards: Card[] = [];

  botsCardsVisible: boolean = false;

  ngOnInit() {
    this.randomizeCards();
    this.randomizeBotCards();
  }

  randomizeCards() {
    const combinedCards = [...this.numberCards, ...this.dragonCard, ...this.windCard];
    this.shuffleArray(combinedCards);
    this.displayedCards = combinedCards.slice(0, 10); // Select the first 10 cards
  }

  randomizeBotCards() {
    const combinedCards = [...this.numberCards, ...this.dragonCard, ...this.windCard];
    this.shuffleArray(combinedCards);
    this.botCards = combinedCards.slice(0, 10); // Select the first 10 cards for the bot
  }

  shuffleArray(array: Card[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
  }

  toggleBotCards() {
    this.botsCardsVisible = !this.botsCardsVisible;
  }

}
