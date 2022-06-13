import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../models/character.modal';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  characters?: Character[];
  currentCharacter: Character = {};
  currentIndex = -1;
  name = '';

  character: Character = {
    id: '',
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
  };

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

  // Delete action
  deleteCharacter(){
    this.characterService.delete(this.character.id)
    .subscribe(
      response => {
        this.retrieveCharacters();
      },
  )}

}
