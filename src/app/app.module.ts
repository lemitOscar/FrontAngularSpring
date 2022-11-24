import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './header/navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {ClientesComponent} from './back/clientes/clientes.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './back/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { FormClientesComponent } from './back/formulario/form-clientes/form-clientes.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'clientes/form', component: FormClientesComponent},
  {path: 'clientes/form/:id', component: FormClientesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ClientesComponent,
    LoginComponent,
    FormClientesComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  //para poder inyectar
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
