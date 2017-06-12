import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Sessio } from './sessio';

@Injectable()
export class SessioServ {

  private headers = new Headers({'Content-Type': 'application/json'});
  private SessioUrl = 'api/sessio';
  
  constructor(private http:Http){}
  
  getServei(): Promise<Sessio[]>{
    return this.http.get(this.SessioUrl)
      .toPromise()
      .then(response => response.json().data as Sessio[])
      .catch(this.handleError);
  }

  private handleError(error:any):Promise<any> {
    console.error('Ha passat un error', error);
    return Promise.reject(error.message || error);
  }
}