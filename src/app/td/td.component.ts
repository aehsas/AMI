import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.css']
})
export class TdComponent implements OnInit {
   value:any
   valuess: any
  constructor(private _auth: AuthService,  private _router: Router) { }

  ngOnInit(): void {
    this.value = this._auth.gettestdetmessage();
    
    this._auth.TestDetails(this.value).subscribe(data =>{ this.valuess = data})
    

  }
  onSubmit()
  {
    this._router.navigate(['/ManageResults']);
  }

}
