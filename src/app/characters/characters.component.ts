import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characterService: CharactersService;
  characters: any = null;

  constructor(private characterServicio: CharactersService) {

    this.characterService = characterServicio;

  }

  ngOnInit(): void {

    this.characters = this.characterServicio.getCharacters();

  }

}
