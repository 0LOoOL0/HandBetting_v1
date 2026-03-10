import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gamepage',
  imports: [],
  templateUrl: './gamepage.component.html',
  styleUrl: './gamepage.component.scss'
})
export class GamepageComponent {

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
