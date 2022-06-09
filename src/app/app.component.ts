import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ricky-morty-v2';

  characters:any = null;

  constructor(private charactersServicio: CharactersService){

  }

  ngOnInit(){
    this.characters=this.charactersServicio.retornar();
  }

}
