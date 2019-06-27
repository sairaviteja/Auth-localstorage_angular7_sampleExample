import { Injectable } from '@angular/core';
import { ILogin} from '../interfaces/login'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
      constructor() { }
      logout(){
        localStorage.setItem('isLoggedIn','false');
        localStorage.removeItem('token');
      }
}
