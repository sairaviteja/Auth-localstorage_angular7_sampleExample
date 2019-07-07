import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registate',
  templateUrl: './registate.component.html',
  styleUrls: ['./registate.component.css']
})
export class RegistateComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {

  }
  uname:any;
  upassword:any;
  urole:any;
  regis(){
        alert("Name with "+this.uname+" is registarted successfully..");
        this.route.navigate(['/login']);

  }

}
