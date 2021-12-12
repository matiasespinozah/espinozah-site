import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// enviroments
import { environment } from '@env/environment';

// rxjs
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

// logger
import { NGXLogger } from 'ngx-logger';

// gtag from google analytics
declare var gtag: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  /**
   * constructor
   *
   * @param router router de angular
   * @param logger logger de angular
   */
  constructor(private router: Router, private logger: NGXLogger) {}

  /**
   * comienza a escuhar los cambios en las rutas de la aplicacion para notificar a google analytics
   */
  start(): void {
    if (environment.production) {
      (
        this.router.events.pipe(
          filter(event => event instanceof NavigationEnd)
        ) as Observable<NavigationEnd>
      ).subscribe((event: NavigationEnd) => {
        gtag('config', environment.googleAnalitycsKey, {
          page_path: event.urlAfterRedirects
        });
      });
    } else {
      this.logger.info('google analitycs disabled in development mode');
    }
  }
}
