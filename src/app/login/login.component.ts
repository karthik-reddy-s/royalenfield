import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms';

import { LoginService } from 'src/app/services/login.service';
import{Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logform: FormGroup;
  
constructor(private router:Router,private loginservice:LoginService){}
  ngOnInit(): void {this.logform = new FormGroup({
    uname: new FormControl(),
    pwd: new FormControl(),
  }); } 
  submit(values: { pwd: any; uname: any; }){
    console.log(values);
    console.log(values.pwd);
  if(this.loginservice.checkuser(values.uname,values.pwd)){
    this.router.navigateByUrl('/loggedin');
  }
}

}

  


