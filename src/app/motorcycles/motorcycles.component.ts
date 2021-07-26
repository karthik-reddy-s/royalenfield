import { Component, OnInit } from '@angular/core';
import { DataService} from'../services/data.service';

@Component({
  selector: 'app-motorcycles',
  templateUrl: './motorcycles.component.html',
  styleUrls: ['./motorcycles.component.css']
})
export class MotorcyclesComponent implements OnInit {

  okok:string="meteor";
  okok1:string="interceptor 650";

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

sendData(){
  this.dataService.changedata(this.okok);
}
sendData1(){
  this.dataService.changedata1(this.okok1);
}

}