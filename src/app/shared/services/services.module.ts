import { NgModule } from '@angular/core';

// services
import { GoogleAnalyticsService } from './google-analytics.service';
import { SeoService } from './seo.service';

@NgModule({
  providers: [GoogleAnalyticsService, SeoService]
})
export class ServicesModule {}
