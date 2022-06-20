import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DortoirComponent } from './dortoir/dortoir.component';
import { HomeComponent } from './home/home.component';
import JeunesseComponent from './jeunesse/jeunesse.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dortoir',
    component: DortoirComponent,
  },
  {
    path: 'jeunesse',
    component: JeunesseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteRoutingModule { }
