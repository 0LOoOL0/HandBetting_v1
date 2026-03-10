import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GamepageComponent } from './components/gamepage/gamepage.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GamepageComponent },
  { path: 'leaderboard', component: LeaderboardComponent }
];
