import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-einfuehrung',
  templateUrl: './einfuehrung.component.html',
  styleUrls: ['./einfuehrung.component.css']
})
export class EinfuehrungComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BtnClick(name: string){
    this.router.navigateByUrl(name);
  }
}
