import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './angular-material/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlmacenComponent } from './dashboard/almacen/almacen.component';
import { SalarioComponent } from './dashboard/salario/salario.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AlmacenComponent,
    SalarioComponent
  ],
  
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'dashboard', component: DashboardComponent,
      children: [
        {path: 'almancen', component: AlmacenComponent},
        {path: 'salario', component: SalarioComponent}
      ]}
    ])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
