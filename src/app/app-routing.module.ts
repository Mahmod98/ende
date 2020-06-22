import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProgramsComponent } from './programs/programs.component';
import { VorstellungComponent } from './vorstellung/vorstellung.component';
import { RegisterComponent } from './register/register.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: 'app-home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'app-programs', component: ProgramsComponent},
  {path: 'app-vorstellung', component: VorstellungComponent},
  {path: 'app-login', component: LoginComponent},
  {path: 'app-registieren', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
