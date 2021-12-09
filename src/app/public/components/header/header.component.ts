import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * estado del menu
   */
  state: boolean;

  /**
   * evento del header
   */
  @Output() event: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * constructor
   */
  constructor() {}

  ngOnInit(): void {}

  /**
   * cambia el estado del menu
   */
  toggle(): void {
    this.state = !this.state;
    this.event.emit(this.state);
  }
}
