import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { GliederungComponent } from './gliederung/gliederung.component';
import { EinfuehrungComponent } from './einfuehrung/einfuehrung.component';
import { KomponenteComponent } from './komponente/komponente.component';
import { SourcesComponent } from './sources/sources.component';
import { TemplatesComponent } from './templates/templates.component';
import { RoutingComponent } from './routing/routing.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    GliederungComponent,
    EinfuehrungComponent,
    KomponenteComponent,
    SourcesComponent,
    TemplatesComponent,
    RoutingComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
