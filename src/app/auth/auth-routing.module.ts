import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../auth/registration/registration.component';
import { LoginComponent } from '../auth/login/login.component';

const routes: Routes = [
  { path: 'Registration', component: RegistrationComponent },
  { path: 'Login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
