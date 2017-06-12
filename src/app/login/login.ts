import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ConnServei} from '../conn.servei';
//import { Sessio } from '../sessio';
//import { SessioServ } from '../sessio.servei';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComp implements OnInit {
  
   // Form declaration
  usuari = new FormControl('')
  pass = new FormControl('')

  loginForm: FormGroup;

  // Request answer variables
  private alertMessage: string;
  private loginSuccess: boolean;
  private loginFail: boolean;
  
  constructor( private connServei: ConnServei, private formBuilder: FormBuilder ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuari: this.usuari,
      pass: this.pass
    });
  }

  login() {

  this.loginSuccess = null;
  this.loginFail = null;

  const usuari = this.usuari.value;
  const pass = this.pass.value;
  
  this.connServei.checkLogin(usuari, pass)
    .then(data => {
      const response: any = data;
      
      if (response.status === 'KO') {
        // Server answer KO
        this.loginFail = true;
      } else {
        // Server answer OK
        this.loginSuccess = true;
      }
    })
    // Handle errors
    .catch(error => {
      this.alertMessage = error;
    });
  }
}