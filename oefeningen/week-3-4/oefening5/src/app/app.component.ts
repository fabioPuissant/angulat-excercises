import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pets: Array<string>;
  inputPetValue: string;
  showError: boolean;

  ngOnInit(): void {
    this.pets = ['Hond', 'Kat', 'Hamster', 'Leguaan', 'Kanarie'];
    this.showError = false;
  }

  addPet() {
    const beforeLength = this.pets.length;
    this.pets = this.pets.includes(this.inputPetValue) ?
      this.pets :
      [...this.pets, this.inputPetValue];

    this.showError = beforeLength === this.pets.length;
    this.inputPetValue = '';
  }

  deletePet(petName: string) {
    this.pets = this.pets.filter(pet => pet !== petName);
  }
}
