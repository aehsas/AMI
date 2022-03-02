import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { MgtrComponent } from './mgtr/mgtr.component';
import { TdComponent } from './td/td.component';
const routes: Routes = [
  { path: 'ManageResults', component: MgtrComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'TestDetails',   component: TdComponent, canActivate: [AuthGuard] },  
  { path: '',redirectTo:'/login' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
