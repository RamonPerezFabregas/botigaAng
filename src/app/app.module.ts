import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DbServei } from './db.servei';

import { AppComponent } from './app.component';
import { LoginComp } from './login/login';
import { ProdPage } from './producte/prodpage';
import { ProdDetall } from './producte/proddetall';
import { ConnServei } from './conn.servei';
import { ProdServei } from './producte.servei';
//import { producte } from './producte';

@NgModule({
  declarations: [
    AppComponent,
    LoginComp,
    ProdPage,
    ProdDetall
//    producte
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
   // InMemoryWebApiModule.forRoot(DbServei)
  ],
  providers: [ConnServei, ProdServei],
  bootstrap: [AppComponent]
})
export class AppModule { }
