import { Component, OnInit } from '@angular/core';
import { IdService } from '../id.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
  providers: [IdService]
})
export class CompAComponent implements OnInit {
  private id: number;

  constructor(private service: IdService) { }

  ngOnInit() {
    this.id = this.service.next();
  }

  onClick() {
    this.id = this.service.next();
  }

}
