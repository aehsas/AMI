import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  LoginUserData={name: "" , password: ""};

  constructor( private _auth: AuthService, private _router: Router) {
   
   }

  ngOnInit() {
   
  }
  
  onSubmit() {
    this._auth.loginUser(this.LoginUserData)
    .subscribe(res=>{
                    console.log(res) 
                    localStorage.setItem('token',res.token)
                    this._router.navigate(['/ManageResults'])}, err=>console.log(err)); 
    }
  }



