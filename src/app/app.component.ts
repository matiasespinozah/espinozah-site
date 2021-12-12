import { Component } from '@angular/core';

// services
import { GoogleAnalyticsService, SeoService } from '@shared/services';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  /**
   * constructor
   *
   * @param googleAnalyticsService Servicio de google analitycs
   * @param seoService Servicio de seo
   */
  constructor(googleAnalyticsService: GoogleAnalyticsService, seoService: SeoService) {
    googleAnalyticsService.start();
    seoService.start();
  }
}
