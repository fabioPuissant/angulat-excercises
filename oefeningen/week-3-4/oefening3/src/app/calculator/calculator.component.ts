import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  first: number;
  second: number;
  outcome: number;
  hidden: boolean;

  constructor() { }

  ngOnInit() {
    this.hidden = true;
  }

  sum() {
    this.hidden = false;
  }

  noticeChange() {
    this.hidden = true;
  }

}
