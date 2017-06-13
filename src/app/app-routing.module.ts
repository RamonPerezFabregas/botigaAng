import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdDetall } from './producte/proddetall';
import { ProdPage } from './producte/prodpage';
import { LoginComp } from './login/login';

const routes: Routes = [
  { path: '',  redirectTo: '/login',  pathMatch: 'full' },
  { path: 'login', component: LoginComp },
  { path: 'detall/:id', component: ProdDetall },
  { path: 'list', component: ProdPage }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}