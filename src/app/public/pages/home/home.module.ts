import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from '@public/components/components.module';

// components
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ComponentsModule]
})
export class HomeModule {}
