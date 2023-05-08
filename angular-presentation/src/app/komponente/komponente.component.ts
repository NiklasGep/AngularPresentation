import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../services/test-service.service';

@Component({
  selector: 'app-komponente',
  templateUrl: './komponente.component.html',
  styleUrls: ['./komponente.component.css']
})
export class KomponenteComponent implements OnInit {
  knumber;

  constructor(private testService: TestServiceService) { 
    this.knumber = 10;
  }

  ngOnInit(): void {
  }

  BtnClick(){
    this.knumber = this.testService.testFunction(this.knumber);
  }
}
