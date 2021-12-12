import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'pagina-no-encontrada',
        loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
      },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
