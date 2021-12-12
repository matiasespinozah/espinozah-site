import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';

// rxjs
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  /**
   * constructor
   *
   * @param titleService servicio de angular del titulo
   * @param metaTagService  servicio de angular de los metatags
   * @param router router de angular
   */
  constructor(private titleService: Title, private metaTagService: Meta, private router: Router) {}

  /**
   * comienza a escuchar los cambios de rutas para actualizar los metatags y el title
   */
  start(): void {
    (
      this.router.events.pipe(
        filter(event => event instanceof ActivationEnd)
      ) as Observable<ActivationEnd>
    ).subscribe(event => {
      const title = event.snapshot.data.title;
      const desc = event.snapshot.data.description;

      if (title) this.setTitle(title);
      if (desc) this.setMetaDescription(desc);
    });
  }

  /**
   * hace el set del title
   *
   * @param title title de la página
   */
  private setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  /**
   * hace el set del meta description
   *
   * @param description description de la página
   */
  private setMetaDescription(description: string) {
    this.metaTagService.updateTag({ name: 'description', content: description });
  }
}
