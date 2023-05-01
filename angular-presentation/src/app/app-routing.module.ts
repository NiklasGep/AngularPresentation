import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EinfuehrungComponent } from './einfuehrung/einfuehrung.component';
import { GliederungComponent } from './gliederung/gliederung.component';
import { KomponenteComponent } from './komponente/komponente.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [{ path:'startseite', component:StartPageComponent },
                        { path:'gliederung', component: GliederungComponent },
                        { path:'einfuehrung', component: EinfuehrungComponent},
                        { path:'komponenten', component: KomponenteComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
