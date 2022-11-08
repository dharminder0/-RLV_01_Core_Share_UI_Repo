import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ContainerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
