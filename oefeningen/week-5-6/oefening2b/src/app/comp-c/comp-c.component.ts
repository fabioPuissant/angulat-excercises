import { Component, OnInit } from '@angular/core';
import { IdService } from '../id.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css'],
  providers: [IdService]
})
export class CompCComponent implements OnInit {
  private id: number;

  constructor(private service: IdService) { }

  ngOnInit() {
    this.id = this.service.next();
  }

  onClick() {
    this.id = this.service.next();
  }

}
