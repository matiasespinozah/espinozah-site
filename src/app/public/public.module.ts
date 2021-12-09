import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { PublicRoutingModule } from './public-routing.module';
import { ComponentsModule } from './components/components.module';

// components
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [PublicComponent],
  imports: [CommonModule, PublicRoutingModule, ComponentsModule]
})
export class PublicModule {}
