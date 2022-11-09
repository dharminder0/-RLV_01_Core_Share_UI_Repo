import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CmsService } from '../sharedServices/cms.service';
import { SharedConfigService } from '../sharedServices/shared-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private generalSubscription:any = Subscription;

  owlOptions;

  public selectedCountry: number = 1;
  public selectedCity: number = 0;

  public doctorsList: any = [];
  public hospitalList: any = [];

  constructor(
    private cmsService: CmsService,
    private sharedConfigService: SharedConfigService
  ) { 
    this.owlOptions = this.sharedConfigService.owlOptions;

  }

  ngOnInit(): void {
    this.generalSubscription = this.sharedConfigService.generalObservable.subscribe((item: any) => {
      if (item && item.changeFor && item.changeFor === "commonFilter") {
        if(item.data && item.data.selectedCountry){
          this.selectedCountry = item.data.selectedCountry;
        }
        if(item.data && item.data.selectedCity){
          this.selectedCity = parseInt(item.data.selectedCity);
        }
        this.getHospitalsList();
        this.getDoctorsList();
        this.sharedConfigService.generalSubscriptionData = {};
        this.sharedConfigService.detectGeneralSubscription();
      }
    });
  }

  ngOnDestroy(){
    this.generalSubscription.unsubscribe();
  }

  getHospitalsList() {
    let reqPayload:any = {
      "searchText": "",
      "countryId": this.selectedCountry,
      "cityList": this.selectedCity > 0?[this.selectedCity]:[],
      "hospitalList": [],
      "languageId": 1
    };
    this.cmsService.getHospitalsList(reqPayload).subscribe((result: any) => {
      this.hospitalList = [];
      if (result && result.length > 0) {
        result.map((item:any) => {
          item.img = "https://rlvcontents.blob.core.windows.net/hospital/Apollo.jpg";
        });
        this.hospitalList = [...result];
      }
    });
  }

  getDoctorsList() {
    let reqPayload:any = {
      "searchText": "",
      "countryId": this.selectedCountry,
      "cityList": this.selectedCity > 0?[this.selectedCity]:[],
      "hospitalList": [],
      "languageId": 1
    };
    this.cmsService.getDoctorsList(reqPayload).subscribe((result: any) => {
      this.doctorsList = [];
      if (result && result.length > 0) {
        result.map((item:any) => {
          item.img = "https://rlvcontents.blob.core.windows.net/doctor/Dr.%20Abhinav%20Aggarwal.JPG";
        });
        this.doctorsList = [...result];
      }
    });
  }

  goToDetailsPage(type:string, id:number){

  }

}
