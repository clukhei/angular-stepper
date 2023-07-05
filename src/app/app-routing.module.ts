import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path: 'events', component: AddressComponent},
  {path: 'attribute', component: PersonalDetailsComponent},
  {path: 'slot', component: ReviewComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
