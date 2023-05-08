import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  id: string| undefined;

  constructor(private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']; // Hier wird die id aus der URL extrahiert
      this.id = id;
    });
    
  }

  BtnClick(){
    this.router.navigate(['error-route']);
    console.log('test');
  }
  
}
