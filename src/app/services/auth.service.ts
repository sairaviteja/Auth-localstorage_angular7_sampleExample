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
  [x: string]: any;
      private baseUrl = 'http://localhost:8086/';
      private loginUrl = this.baseUrl+'registration';
      private getUser = this.baseUrl+'hello';
      private headers:HttpHeaders = new HttpHeaders();

      constructor(private httpC:HttpClient) {

       }
      login(username:string,password:string):Observable<boolean>{
         return this.httpC.post(this.loginUrl,{username:username,password:password},{responseType:'text' as 'json'})
          .pipe(
                map((response:Response)=>{
                  console.log("the password is "+password);
                  console.log("the name is "+username);
                  
                      const resToken = response;
                      console.log("the the Token Value is "+resToken);
                      console.log("the Tken type is  -----------------"+typeof(resToken));
                      //let refreshToken = response.body.refreshToken;
                      //console.log("the RefreshToken  value is -----------------"+refreshToken);
                    if(resToken){
                           localStorage.setItem("loggedUser",JSON.stringify({name:username,token:resToken}));
                           //console.log("1-----------------> "+typeof(localStorage.getItem('loggedUser')));    
                          const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
                           //console.log("INside getTken() the loggedUser value is ===> "+typeof(loggedUser));
                           //let token =  loggedUser.name;
                           //console.log("2-----------------> "+typeof  (localStorage.getItem('loggedUser')));
                            //this.getToken();                           
                            console.log("the logged name is----->"+loggedUser.name+" and the token is "+loggedUser.token);
                        return true;       
                    }
                    else{
                            console.log("nt returng data");
                            return false;
                        } 
                  })
            ); 
      }
/*
      getHello():any{
        console.log("started in getHello");
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        let tokenValue = loggedUser.token;
        tokenValue = JSON.stringify(tokenValue);
        console.log("the token is "+tokenValue+" and the typeof tokenvali "+typeof(tokenValue));  
        let  bearerHeader = 'Bearer ' + tokenValue;
        console.log("the bearerValue is "+bearerHeader);
       return  this.httpC.get(this.getUser,{headers:new HttpHeaders().set('Authorization',bearerHeader)})
       .pipe(
          map((res:Response) => {
                  console.log("inside the getHello return call");
                    return res;
          })
       )
      }
        */

      logout(){
        localStorage.removeItem('loggedUser');  
        //localStorage.clear();
      }

      getToken(){
          let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
          console.log("INside getTken() the loggedUser value is ===> "+loggedUser);
          //let token = loggedUser && loggedUser.token;
          let token =  loggedUser.token;
          console.log("INside getTken() the token value is ===> "+token);

          return token? token: "";

      }

    /*  isUserAuthenticated(){
        const token = this.getToken();
         console.log("INside the IsAuth()=====> "+token) ;
        return token !=""? !jwtHelper.isTokenExpired(token):false;

      }*/

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
