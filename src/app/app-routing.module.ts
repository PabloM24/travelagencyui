import { HomeContentComponent } from './home-content/home-content.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', redirectTo: 'home/homeContent', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homeContent', component: HomeContentComponent },
  {
    path: 'home', component: HomeComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: 'homeContent', component: HomeContentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginComponent, HomeContentComponent]
