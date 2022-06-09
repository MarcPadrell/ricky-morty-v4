import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  personajes: any = null;

  constructor(private personajesService: CharactersService) { }

  ngOnInit(): void {
    this.personajes=this.personajesService.retornar();
  }

}
