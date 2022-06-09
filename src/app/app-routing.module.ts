import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
