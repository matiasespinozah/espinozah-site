import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
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
