import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  show: boolean;
  times: Array<string>

  ngOnInit(): void {
    this.times = [];
  }

  toggle() {
    this.show = !this.show;
    const timeString = new Date().toTimeString();
    console.log(`Clicked on: ${timeString}.`);
    this.times.push(timeString);
  }
}
