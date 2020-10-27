import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { ManagementPortalComponent } from './management-portal/management-portal.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';
import { CommercialPortalComponent } from './commercial-portal/commercial-portal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './shared/footer/footer.component';
import { NavModule } from './shared/nav/nav.module';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentsComponent,
    ManagementPortalComponent,
    EmployeePortalComponent,
    CustomerPortalComponent,
    CommercialPortalComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    NavModule,
    MatCardModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
