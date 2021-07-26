import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  checkuser(uname, pwd): boolean {
    if (uname === "karthik" && pwd === "karthik") {
      localStorage.setItem('uname', uname);
      
      return true;
    } else {
      localStorage.removeItem('uname');
      return false;
      
    }
  }
}
