import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  itemList: string[] = ['TestObjekt 1', 'TestObjekt 2', 'TestObjekt 3', 'TestObjekt 4','TestObjekt 5'];

  value$: Observable<string>;
  
  constructor() {
    // Erstelle ein Observable mit einem initialen Wert
    this.value$ = new Observable<string>(observer => {
      observer.next('Initial value');
    });
   }

  ngOnInit() {
  }

  updateValue() {
    // Aktualisiere den Wert des Observables
    this.value$ = new Observable<string>(observer => {
      observer.next('Updated value');
    });
  }


}
