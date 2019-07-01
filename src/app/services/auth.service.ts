import { Injectable } from '@angular/core';
import { ILogin} from '../interfaces/login'
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
//import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs';
//import { Response } from '@angular/common/http';


const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
      private baseUrl = 'http://dummy.restapiexample.com/api/v1';
      private loginUrl = this.baseUrl+'/create';
      private headers:HttpHeaders = new HttpHeaders();

      constructor(private httpC:HttpClient) {

       }
      login(username:string,password:string):Observable<boolean>{
         return this.httpC.post(this.loginUrl,{username:username,password:password})
          .pipe(
                map((response:Response)=>{
                  console.log("the salary is "+password);
                  console.log("the nane is "+username);
                  
                      let token = response;
                      console.log("the Tken value is -----------------"+token);
                      //let refreshToken = response.body.refreshToken;
                      //console.log("the RefreshToken  value is -----------------"+refreshToken);
                    if(token){
                           localStorage.setItem("loggedUser",JSON.stringify({name:name,token:token}));
                        return true;       
                    }
                    else{
                            console.log("nt returng data");
                            return false;
                        } 
                  })
            ); 
      }

      logout(){
        localStorage.removeItem('loggedUser');  
      }

      getToken(){
          let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
          console.log("INside getTken() the loggedUser value is ===> "+loggedUser);
          let token = loggedUser && loggedUser.token;
          console.log("INside getTken() the token value is ===> "+token);

          return token? token: "";

      }

      isAuthenticated(){
        const token = this.getToken();
         console.log("INside the IsAuth()=====> "+token) ;
        return token !=""? !jwtHelper.isTokenExpired(token):false;

      }

      /*private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable(error);
      }*/
}
