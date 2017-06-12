import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ProdServei } from '../producte.servei';
//import { producte } from '../producte';

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
  selector: 'prods-page',
  templateUrl: './prodpage.html'
})

export class ProdPage implements OnInit{

  private ProducteForm: FormGroup;
  private alertMessage: string;
  private pag: number;
  private prods: object;
  
  constructor(private prodServ: ProdServei, private formBuilder: FormBuilder){
    this.ProducteForm = this.formBuilder.group({pageSelected: [1, Validators.required]} );
  }
  
  ngOnInit(){}
  
  requestProducts(){
    this.prods = null;
    this.alertMessage = null;
    
    this.pag = this.ProducteForm.controls.pageSelected.value;
    
    this.prodServ.ListProd(this.pag)
      .then(data => {
        const resp: any = data;
        if(resp.status === 'KO') {
          this.alertMessage = 'SERVER RESPONSE: '+resp.message;
        }else{
          this.prods = data;
        }
      })
      .catch(error=> { this.alertMessage = error;
      });
  }
 
}