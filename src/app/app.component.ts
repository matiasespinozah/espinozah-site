import { Component } from '@angular/core';

// services
import { GoogleAnalyticsService } from '@shared/services';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  /**
   * constructor
   *
   * @param googleAnalyticsService Servicio de google analitycs
   */
  constructor(googleAnalyticsService: GoogleAnalyticsService) {
    googleAnalyticsService.start();
  }
}
