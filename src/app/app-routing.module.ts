import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


//TODO: Add a route for an error page to redirect users when handling errors.
const routes: Routes = [
  { path: 'persons', component: PersonsComponent },
  { path: 'detail/:fname', component: PersonDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }