import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [NavigationComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [NavigationComponent, HeaderComponent]
})
export class ComponentsModule {}
