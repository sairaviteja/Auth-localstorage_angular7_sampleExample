import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { WelcomePageComponent } from 'src/app/welcome-page/welcome-page.component';
import { RegistateComponent } from 'src/app/registate/registate.component';

const routes: Routes = [
    { path:'login', component:LoginComponent},
    { path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
    { path:'welcome', component:WelcomePageComponent},
    { path:'registration', component:RegistateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
