import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from  './about-us/about-us.component';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {HomeComponent} from './home/home.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'SignUp', component: UserRegistrationComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'SignIn',      component: LoginComponent },
  { path: 'AboutUs',component: AboutUsComponent  },
  {
    path: 'ContactUs',component: ContactComponent },
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
appRoutes,{enableTracing:true}
    )
  ]
})
export class AppRoutingModule { }
