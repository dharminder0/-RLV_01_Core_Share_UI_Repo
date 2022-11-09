import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { HospitalDetailsComponent } from './hospitals/hospital-details/hospital-details.component';
import { HospitalsComponent } from './hospitals/hospitals.component';

const routes: Routes =  [
  {
      path: '', component: ContainerComponent, 
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { 
          path: 'doctors',
          children: [
            { path: '', component: DoctorsComponent},
            { path: ':id', component: DoctorDetailsComponent }
          ] 
        },
        { 
          path: 'hospitals',
          children: [
            { path: '', component: HospitalsComponent},
            { path: ':id', component: HospitalDetailsComponent }
          ] 
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CMSRoutingModule { }
