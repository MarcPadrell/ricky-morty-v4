import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.modal';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters?: Character[];
  currentCharacter: Character = {};
  currentIndex = -1;
  name = '';

  constructor(private characterService: CharacterService) {

  }

  ngOnInit(): void {

    this.retrieveCharacters();

  }

  retrieveCharacters(): void {
    this.characterService.getAll()
      .subscribe(
        data => {
          this.characters = data;
          console.log(data);
        }
      )
  }

  refreshList(): void {
    this.retrieveCharacters();
    this.currentCharacter = {};
    this.currentIndex = -1;
  }

  setActiveCharacter(character: Character, index: number): void {
    this.currentCharacter = character;
    this.currentIndex = index;
  }

  removeAllCharacters(): void {
    this.characterService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        }
      )
  }

  searchName(): void {
    this.currentCharacter = {},
      this.currentIndex = -1,

      this.characterService.findByName(this.name)
        .subscribe(data => {
          this.characters = data;
          console.log(data);
        })
  }

}
