import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CmsService } from '../sharedServices/cms.service';
import { SharedConfigService } from '../sharedServices/shared-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private generalSubscription: any = Subscription;

  owlOptions;

  public selectedFilter: any = {};

  public doctorsList: any = [];
  public hospitalList: any = [];

  public slidesLength: number = 3;


  constructor(
    private cmsService: CmsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedConfigService: SharedConfigService
  ) {
    this.owlOptions = this.sharedConfigService.owlOptions;
    // if (window.innerWidth <= 1400) {
    //   this.slidesLength = 2;
    // }
    if (window.innerWidth <= 600) {
      this.slidesLength = 1;
    }
  }

  ngOnInit(): void {
    this.generalSubscription = this.sharedConfigService.generalObservable.subscribe((item: any) => {
      if (item && item.changeFor && item.changeFor === "commonFilter") {
        if(item.data && Object.keys(item.data).length > 0){
          this.selectedFilter = JSON.parse(JSON.stringify(item.data));
        }
        this.getHospitalList();
        this.getDoctorsList();
        this.sharedConfigService.generalSubscriptionData = {};
        this.sharedConfigService.detectGeneralSubscription();
      }
    });
  }

  ngOnDestroy() {
    this.generalSubscription.unsubscribe();
  }

  getHospitalList() {
    let reqPayload: any = {
      "searchText": "",
      "countryCode": this.selectedFilter.country,
      "cityList": this.selectedFilter.city > 0?[this.selectedFilter.city]:[],
      "hospitalList": [],
      "languageId": 1
    };
    this.cmsService.getHospitalList(reqPayload).subscribe((result: any) => {
      this.hospitalList = [];
      if (result && result.length > 0) {
        this.hospitalList = [...result];
      }
    });
  }

  getDoctorsList() {
    let reqPayload: any = {
      "searchText": "",
      "countryCode": this.selectedFilter.country,
      "cityList": this.selectedFilter.city > 0?[this.selectedFilter.city]:[],
      "hospitalList": [],
      "languageId": 1
    };
    this.cmsService.getDoctorsList(reqPayload).subscribe((result: any) => {
      this.doctorsList = [];
      if (result && result.length > 0) {
        this.doctorsList = [...result];
      }
    });
  }

  gotToDetailPage(type: string, data: any) {
    return false;
    this.router.navigate([`/cms/${type}/${data.id}`]);
  }

}
