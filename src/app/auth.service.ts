import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _ManageUrl = "http://localhost:3000/api/ManageResults";
  private _TestUrl = "http://localhost:3000/api/TestDetails";
  message: any;
  constructor(private http: HttpClient) { }
  
  registerUser(user: any)
  {
    return this.http.post<any>(this._registerUrl,user);
  }
  loginUser(user: any)
  {
    return this.http.post<any>(this._loginUrl,user);
  }
  ManageUser()
  {
    return this.http.get<any>(this._ManageUrl);
  }
  TestDetails(user: any)
  {
    return this.http.post<any>(this._TestUrl,user);
  }
  loggendIn()
  {
     return !!localStorage.getItem('token');
  }
  settestdetsmessage(data: any)
  {
    
     this.message = data;
  }
  gettestdetmessage()
  {
    return this.message;
  }
  
}
