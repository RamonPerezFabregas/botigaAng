import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ProdServei } from '../producte.servei';
//import { producte } from '../producte';
import 'rxjs/add/operator/switchMap';

interface producte {
  id: number;
  product_image: string;
  product_name: string;
  product_dosage: string;
  product_price: string;
  product_distributor: string;
  distributor_address: string;
  distributor_email: string;
  distributor_phone: string;
  product_diagnosis: string;
}

@Component({
  selector: 'prod-detall',
  templateUrl: './proddetall.html'
})

export class ProdDetall implements OnInit{
 
  //private ProducteForm: FormGroup;
  private alertMessage: string;
  //private id: number;
  private prod: object;
 
 // constructor(private prodServ: ProdServei, private formBuilder: FormBuilder){
    //this.ProducteForm = this.formBuilder.group({producte: [1, Validators.required]} );
 // }
  constructor(
    private prodServ: ProdServei,
    private route: ActivatedRoute,
    private location: Location
  ) {}
 
   ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.prodServ.ProdDet(+params['id']))
      .subscribe(prod => this.prod = prod);
   }
 
  // productDetall(id:number){
    // this.prod = null;  
    // this.alertMessage=null;
    
   // this.id = this.ProducteForm.controls.producte.value;
    // this.prodServ.ProdDet(this.id)
      // .then(data => {
        // const resp: any = data;
        // if(resp.status === 'KO') {
          // this.alertMessage = 'SERVER RESPONSE: '+resp.message;
        // }else{
          // this.prod = data;
        // }
      // })
      // .catch(error=> { this.alertMessage = error; });
  // }
}