import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MgtrComponent } from './mgtr/mgtr.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { TdComponent } from './td/td.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import {NgPipesModule} from 'ngx-pipes';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MgtrComponent,
    TdComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,AuthGuard,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
