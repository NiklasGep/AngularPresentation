import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EinfuehrungComponent } from './einfuehrung/einfuehrung.component';
import { GliederungComponent } from './gliederung/gliederung.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [{ path:'startpage', component:StartPageComponent },
                        { path:'gliederung', component: GliederungComponent },
                        { path:'einfuehrung', component: EinfuehrungComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
