import { Component } from '@angular/core';
import { Pokemon } from './models/Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemons: Pokemon[] = [
    { id: 1, name: "Bulbasaur", type: "grass", icon: "assets/bulbasaur.png" },
    { id: 2, name: "Ivysaur", type: "grass", icon: "/assets/ivysaur.png" },
    { id: 3, name: "Venusaur", type: "grass", icon: "/assets/venusaur.png" },
    { id: 4, name: "Charmander", type: "fire", icon: "/assets/charmander.png" },
    { id: 5, name: "Charmeleon", type: "fire", icon: "/assets/charmeleon.png" },
    { id: 6, name: "Charizard", type: "fire", icon: "/assets/charizard.png" },
    { id: 7, name: "Squirtle", type: "water", icon: "/assets/squirtle.png" },
    { id: 8, name: "Wartortle", type: "water", icon: "/assets/wartortle.png" },
    { id: 9, name: "Blastoise", type: "water", icon: "/assets/blastoise.png" }
  ];

  selected: string;

  onSelect(event: string) {
    this.selected = event;
  }

}
