import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  //add router to navigate to both game and leaderboard pages
  constructor(private router: Router) {}

  //function to navigate to game page
  navigateToGame() {
    this.router.navigate(['/game']);
  }

  //method to navigate to leaderboard page
  navigateToLeaderboard() {
    this.router.navigate(['/leaderboard']);
  }

}
