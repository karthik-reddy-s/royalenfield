import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css']
})
export class LoggedinComponent implements OnInit {
  myIndex = 0;
  
  constructor() { }

  ngOnInit(): void {
  }
  carousel() {
    var i;
    var a;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    a=this.myIndex++;
    if (a > x.length) {a = 1}    
    x[a-1].style.display = "block";  
    setTimeout(this.carousel, 2000); // Change image every 2 seconds
  }

}
