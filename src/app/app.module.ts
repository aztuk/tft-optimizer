import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './page/main/main.component';
import { ChampionComponent } from './components/champion/champion.component';
import { SynergyComponent } from './components/synergy/synergy.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { TooltipPointsComponent } from './components/tooltip-points/tooltip-points.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChampionComponent,
    SynergyComponent,
    TooltipDirective,
    TooltipPointsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
