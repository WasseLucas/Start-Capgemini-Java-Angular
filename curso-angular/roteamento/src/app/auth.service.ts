import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  
  constructor() { }

  estaAutenticado():boolean{
    return !!sessionStorage.getItem(this.accessToken);
  }

  login(email:string, password: string):boolean{
    
    const authenticado = email === 'admin' && password === 'admin';

    if(authenticado){
      sessionStorage.setItem(this.accessToken,'access-token');
      return true
    }

    return false
  }

  logout():void{
    sessionStorage.removeItem(this.accessToken);
  }

}
