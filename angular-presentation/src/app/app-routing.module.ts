import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EinfuehrungComponent } from './einfuehrung/einfuehrung.component';
import { ErrorComponent } from './error/error.component';
import { GliederungComponent } from './gliederung/gliederung.component';
import { KomponenteComponent } from './komponente/komponente.component';
import { RoutingComponent } from './routing/routing.component';
import { SourcesComponent } from './sources/sources.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [{ path:'startseite', component:StartPageComponent },
                        { path:'gliederung', component: GliederungComponent },
                        { path:'einfuehrung', component: EinfuehrungComponent},
                        { path:'komponenten', component: KomponenteComponent },
                        { path:'sources', component: SourcesComponent },
                        { path:'templates', component: TemplatesComponent},
                        { path:'routing/:id', component: RoutingComponent},
                        { path:'**', component: ErrorComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
