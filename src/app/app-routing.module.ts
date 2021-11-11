import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MadreComponent } from './madre/madre.component';

const routes: Routes = [
  {
    path: 'menu',
    component: AppComponent,
    data: { title: 'Menu' }
  },
  {
    path: 'madre',
    component: MadreComponent,
    data: { title: 'Datos Madre' }
  },
  { path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
