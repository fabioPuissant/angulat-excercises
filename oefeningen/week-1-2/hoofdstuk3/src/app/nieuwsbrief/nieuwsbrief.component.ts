import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nieuwsbrief',
  templateUrl: './nieuwsbrief.component.html',
  styleUrls: ['./nieuwsbrief.component.css']
})
export class NieuwsbriefComponent implements OnInit {
  mail = '';
  displayMail = '';
  show = false;

  constructor() { }

  ngOnInit() {
  }

  logMail() {
    this.show = true;
    this.displayMail = this.mail;
    this.mail = '';
  }
}
