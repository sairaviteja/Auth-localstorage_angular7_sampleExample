import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service';  



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  id;
   
  constructor(private router:Router, private auth:AuthService) { }
        
  ngOnInit() {
    //this.id=localStorage.getItem('loggedUser');
    let user = JSON.parse(localStorage.getItem("loggedUser"));
    this.id = user.name; 
  }

  show:boolean = false;
  dashboard(){
        this.show = true;
        
  }

   logout(){
          console.log("you are logged out");
          this.auth.logout();
          this.router.navigate(['/login']);
   }
}
