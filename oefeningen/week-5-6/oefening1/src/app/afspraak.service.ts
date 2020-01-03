import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AfspraakService {

  getTypes(): Array<string> {
    return ['ontspanning', 'zakelijk', 'andere'];
  }
}
