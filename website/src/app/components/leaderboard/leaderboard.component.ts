import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  imports: [],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
