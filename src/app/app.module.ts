import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';

// plugins
import { LoggerModule } from 'ngx-logger';

// components
import { AppComponent } from './app.component';
import { environment } from '@env/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: environment.logLevel
    }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
