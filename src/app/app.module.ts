import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'clk-web-components';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ReviewComponent } from './review/review.component'
import { StepperDirective } from './stepper.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddressComponent,
    PersonalDetailsComponent,
    ReviewComponent,
    StepperDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
