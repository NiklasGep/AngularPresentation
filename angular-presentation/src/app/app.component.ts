import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentNav: Observable<string> ;
  constructor(private router: Router, private route: ActivatedRoute){
    this.router.navigateByUrl('startseite');
    this.currentNav= this.route.params.pipe(
      map(params => params['slug'])
    );
  }
  title = 'angular-presentation';

  navOnClick(navName: string){
    this.router.navigateByUrl(navName);
  }
}
