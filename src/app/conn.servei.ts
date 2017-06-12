import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConnServei {

  constructor( private http: Http) { }

  public checkLogin( usu_nom: string, pass: string) {
    console.log('//////////////');
    console.log('Checking data');

    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const urlLogin= 'http://multimedia.uoc.edu/frontend/auth.php'
    const body = 'user=' + usu_nom + '&passwd=' + pass;

    
    return new Promise(
      resolve => {
        this.http.post(urlLogin, body, {headers: headers})
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          });
      }
    );

  }

}
