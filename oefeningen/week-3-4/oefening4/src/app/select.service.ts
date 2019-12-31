import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  private dataScource: BehaviorSubject<string> = new BehaviorSubject<string>('');
  selected: Observable<string> = this.dataScource.asObservable();

  constructor() { }

  setSelected(nextData: string) {
    this.dataScource.next(nextData);
    console.log(this.selected)
  }

}
