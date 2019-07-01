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
    this.id=localStorage.getItem('token');
  }


   logout(){
          console.log("you are logged out");
          this.auth.logout();
          this.router.navigate(['/login']);
   }
}
