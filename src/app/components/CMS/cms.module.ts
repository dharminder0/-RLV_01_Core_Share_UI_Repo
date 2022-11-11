import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CMSRoutingModule } from './cms-routing.module';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HttpClientModule } from '@angular/common/http';
import { CmsService } from './sharedServices/cms.service';
import { HttpInterceptProviders } from '../../../assets/interceptor';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { CommonFiltersComponent } from './sharedComponent/common-filters/common-filters.component';
import { HospitalDetailsComponent } from './hospitals/hospital-details/hospital-details.component';
import { ProductFiltersComponent } from './sharedComponent/product-filters/product-filters.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


@NgModule({
  declarations: [
    ContainerComponent,
    HomeComponent,
    MainHeaderComponent,
    MainFooterComponent,
    HospitalsComponent,
    DoctorsComponent,
    DoctorDetailsComponent,
    CommonFiltersComponent,
    HospitalDetailsComponent,
    ProductFiltersComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CarouselModule,
    CMSRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    NgxSliderModule
  ],
  providers: [CmsService, HttpInterceptProviders]

})
export class CMSModule { }
