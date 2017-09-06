import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { ErrorComponent } from './componentes/error/error.component';

import { FormsModule } from '@angular/forms';
import{ RouterModule, Routes } from '@angular/router'

let miRuteo=[
  {path:'adivina', component:AdivinaElNumeroComponent},
  {path:'agilidad', component:AgilidadAritmeticaComponent},
  {path:'login', component:LoginComponent},
  {path:'error', component:ErrorComponent},
  {path:'menu', component:MenuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AdivinaElNumeroComponent,
    AgilidadAritmeticaComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(miRuteo)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
