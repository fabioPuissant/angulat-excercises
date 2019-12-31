import { Component, OnInit, Input, Output } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { SelectService } from '../select.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor(private selectService: SelectService) { }

  ngOnInit() {
    this.selectService.getSelected()
  }

}
