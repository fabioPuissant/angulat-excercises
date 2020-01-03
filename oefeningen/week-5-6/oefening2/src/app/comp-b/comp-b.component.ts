import { Component, OnInit } from '@angular/core';
import { IdService } from '../id.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {
  private id: number;

  constructor(private service: IdService) { }

  ngOnInit() {
    this.id = this.service.next();
  }

  onClick() {
    this.id = this.service.next();
  }

}
