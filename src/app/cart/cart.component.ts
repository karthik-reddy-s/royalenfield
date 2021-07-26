import { Component, OnInit } from '@angular/core';

import{DataService} from '../services/data.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
newmessage;
newmessage1;
a=1;

  constructor(private dataService:DataService){}
  ngOnInit(): void {
  this.dataService.currentmessage$.subscribe(data =>{
    this.newmessage = data
  },err=>{console.log(err);})
  this.dataService.currentmessage1$.subscribe(data =>{
    this.newmessage1 = data
  },err=>{console.log(err);})
  }  
  
}

