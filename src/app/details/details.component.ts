import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  character: any = null;

  constructor(private characterServicio: CharactersService) { }

  ngOnInit(): void {

    this.character = this.characterServicio.getCharacter();

  }

}
