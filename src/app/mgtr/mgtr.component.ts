import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-mgtr',
  templateUrl: './mgtr.component.html',
  styleUrls: ['./mgtr.component.css']
})



export class MgtrComponent implements OnInit {
  Testdetes = {Category: "",SerialNo:"", Date:"" }
  public values : any
  
  constructor(private _auth: AuthService,  private _router: Router, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this._auth.ManageUser().subscribe(data=>{
                             this.values = data});
                                                  
                             
  }
  onSubmit()
  {
    let latest_date =this.datepipe.transform(this.Testdetes.Date, 'dd-MM-yyyy');
    this.Testdetes.Date = latest_date || '{}'
    console.log(latest_date)
    this._auth.settestdetsmessage(this.Testdetes)
    console.log(this.Testdetes)
    this._router.navigate(['/TestDetails']);
  }
  viewsubmit(data: {})
  {
    this._auth.settestdetsmessage(data)
    
    this._router.navigate(['/TestDetails']);
  }

}
