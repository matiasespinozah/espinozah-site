import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /**
   * estado del menu
   */
  menuState: boolean;

  /**
   * constructor
   */
  constructor() {}

  ngOnInit(): void {
    this.menuState = false;
  }

  /**
   * toggle del menu gatillado desde el header component
   *
   * @param menuState estado del menu
   */
  toggleMenu(menuState: boolean): void {
    this.menuState = menuState;
  }
}
