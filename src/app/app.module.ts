import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CMSModule } from './components/CMS/cms.module';
import { PatientModule } from './components/Patient/patient.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { Config } from '../config';
import { HttpInterceptProviders } from '../assets/interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CMSModule,
    PatientModule,
    BrowserAnimationsModule
  ],
  providers: [Config, HttpInterceptProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
