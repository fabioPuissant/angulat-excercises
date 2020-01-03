import { Component, OnInit } from '@angular/core';
import { AfspraakService } from './afspraak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  afspraken: Array<any>
  types: Array<string>;
  type: string;
  herinnering: boolean;

  omschrijving: string;
  datum: any;
  dagdeel: string;

  constructor(private service: AfspraakService) {
  }

  ngOnInit(): void {
    this.types = this.service.getTypes();
    this.afspraken = [];
  }

  onSubmit(form) {
    if (!form.form.valid) {
      return;
    }

    const afspraak = {
      omschrijving: this.omschrijving,
      type: this.type,
      herinnering: this.herinnering,
      datum: this.datum,
      dagdeel: this.dagdeel
    };

    console.log(`Nieuwe afspraak: ${JSON.stringify(afspraak)}`);
    this.afspraken.push(afspraak);
  }

}
