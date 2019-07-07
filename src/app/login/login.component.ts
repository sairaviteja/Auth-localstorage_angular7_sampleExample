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
 
  temp:boolean;
  model: ILogin ={
        userId:"teja",
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
            username:['',Validators.required],
            password:['',Validators.required]
            
        });
         this.returnUrl="/dashboard";
         this.authService.logout();  
  } 

  get f(){ return this.loginForm.controls;}

  login(){
       
    /* if(this.loginForm.invalid)
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
    } */   

      /* let temp= this.authService.login(this.f.name.value,this.f.salary.value,this.f.age.value);
       if(temp){
         console.log("Login success..");
         this.router.navigate([this.returnUrl])
       }*/

       this.authService.login(this.f.username.value,this.f.password.value).subscribe(response => {
                this.router.navigate([this.returnUrl]);
       })
       

  }


}
