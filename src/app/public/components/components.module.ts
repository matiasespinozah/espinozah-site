import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavigationComponent, HeaderComponent, PresentationComponent, FooterComponent],
  imports: [CommonModule],
  exports: [NavigationComponent, HeaderComponent, PresentationComponent, FooterComponent]
})
export class ComponentsModule {}
