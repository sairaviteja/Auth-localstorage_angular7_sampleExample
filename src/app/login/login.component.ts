import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { AuthService } from '../services/auth.service'  
import { ILogin } from 'src/app/interfaces/login';  
import { Router } from '@angular/router';  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  model: ILogin ={
        userId:"admin",
        password:"admin@123"
  }

  loginForm:FormGroup;
  message:string;
  returnUrl:string;
  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private authService:AuthService
    ) {  }

  ngOnInit() {
        this.loginForm=this.formBuilder.group({
            userid:['',Validators.required],
            password:['',Validators.required]
        });
         this.returnUrl="/dashboard";
         this.authService.logout();  
  }

  get f(){ return this.loginForm.controls;}

  login(){
      
    if(this.loginForm.invalid)
       return;
    else{
         if(this.f.userid.value == this.model.userId && this.f.password.value == this.model.password){
              console.log("Login success");

              localStorage.setItem('isLoggedIn',"true");
              localStorage.setItem('token',this.f.userid.value)
              this.router.navigate([this.returnUrl])
         }
         else{
           this.message="PLease enter correct useId and password..!";
         }
    }   


  }


}
