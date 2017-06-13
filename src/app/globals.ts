//Control de Sessio oberta

import {Injectable} from "@angular/core";

@Injectable() 
export class AppGlobals {
  // use this property for property binding
  public isUserLoggedIn: boolean = false;

  setLoginStatus(isLoggedIn){
    this.isUserLoggedIn = isLoggedIn;
    if (isLoggedIn==true) {
      sessionStorage.setItem('sessio','v');
    }else{
      sessionStorage.setItem('sessio','f');
    }
  }

  getLoginStatus(){
    //return this.isUserLoggedIn;
    if (sessionStorage.getItem('sessio') == null) {
       sessionStorage.setItem('sessio','f');
    }
    if(sessionStorage.getItem('sessio')=='v') {
      return true;
    }else{
      return false;
    }
  }
}