import { Injectable } from '@angular/core';
import{ BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
messagesource=new BehaviorSubject('Default');
currentmessage$=this.messagesource.asObservable();
messagesource1=new BehaviorSubject('Default');
currentmessage1$=this.messagesource1.asObservable();



changedata(data:string){
  this.messagesource.next(data);
}
changedata1(data:string){
  this.messagesource1.next(data);
}


  constructor() { }
}
