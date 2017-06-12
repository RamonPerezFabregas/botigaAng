import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProdServei {

  constructor( private http: Http) { }
  
  public ListProd(pag: number){

    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const urlLogin= 'http://multimedia.uoc.edu/frontend/getproducts.php?page='+pag;
    
    return new Promise(
      resolve => {
        this.http.get(urlLogin)
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          });
      }
    );
  }
  
  public ProdDet(id: number){
    const urlLogin= 'http://multimedia.uoc.edu/frontend/productdetail.php?id='+id;
   // console.log(urlLogin);
    return new Promise(
      resolve => {
        this.http.get(urlLogin)
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          });
      }
    );
  }
}