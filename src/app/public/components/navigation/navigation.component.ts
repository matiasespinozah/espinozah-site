import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  /**
   * estado de la navegacion
   */
  @Input() state: boolean;

  /**
   * constructor
   */
  constructor() {}

  ngOnInit(): void {}
}
