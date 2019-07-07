import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';  

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private auth:AuthService,private jwthelper:JwtHelperService){}

  canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
      if(this.isLoggedIn()){
        console.log("in auth guard ----------------");
          return true;
      }
      console.log("in auth guard outside if") ;
      this.router.navigate(['/login']);
      return false;
  }
public isLoggedIn(){
    let status=false;
    let userData = JSON.parse(localStorage.getItem('loggedUser'));
    if(userData!=null)
        return true;
    else
         status=false;

    return status;     

}


}
