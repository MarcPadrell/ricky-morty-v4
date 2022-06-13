import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AddCharacterComponent } from './add-character/add-character.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    AboutUsComponent,
    DetailsComponent,
    AddCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
