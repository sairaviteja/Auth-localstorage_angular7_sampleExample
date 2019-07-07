import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private route:Router,private authService:AuthService){}

  title = 'sampleTest';
test:any;
  ngOnInit(){
          
          let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
          //let userToken = loggedUser.token;
          //console.log("Starting page loading before the token value is "+userToken);
          if(loggedUser!=null){
              console.log("in appComponent inisde if ");
              this.route.navigate(['/dashboard']);
                /*this.authService.getHello().subscribe(response => {
                        this.test = response;
                        console.log("in main app compopnent value is "+this.test);
                })*/
          }
          else
            this.route.navigate(['/welcome']);
     }    
}
