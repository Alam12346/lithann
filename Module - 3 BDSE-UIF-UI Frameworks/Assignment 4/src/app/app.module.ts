import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { ListcarsComponent } from './listcars/listcars.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CarDetailComponent,
    ListcarsComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
