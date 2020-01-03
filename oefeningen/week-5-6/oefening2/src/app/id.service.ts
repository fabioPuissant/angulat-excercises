import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  private id: number;

  constructor() {
    this.id = 0;
  }

  next() {
    this.id++;
    return this.id;
  }
}
