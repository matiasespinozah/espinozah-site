import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// enviroments
import { environment } from '@env/environment';

// rxjs
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

// gtag from google analytics
declare var gtag: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * constructor
   *
   * @param router router de angular
   */
  constructor(private router: Router) {
    this.googleAnalitycs();
  }

  /**
   * escucha los cambios de google analitics y los trasmite a google
   */
  private googleAnalitycs(): void {
    if (environment.production) {
      (
        this.router.events.pipe(
          filter(event => event instanceof NavigationEnd)
        ) as Observable<NavigationEnd>
      ).subscribe((event: NavigationEnd) => {
        gtag('config', 'G-GQ9713VGKL', {
          page_path: event['urlAfterRedirects']
        });
      });
    }
  }
}
