import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  testFunction(number: any){
    number = number+ 5;
     return number;
  }
}
