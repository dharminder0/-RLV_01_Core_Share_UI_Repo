import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CmsService } from '../sharedServices/cms.service';
import { SharedConfigService } from '../sharedServices/shared-config.service';


@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit, OnDestroy {
  private generalSubscription:any = Subscription;
  // Objects
  public selectedCard: any = {};
  public selectedFilter: any = {};

  // Array
  public reportData: any = [];

  // Numeric
  public cardPerRow: number = 3;
  public totalRecords: number = 0;


  constructor(
    private cmsService: CmsService,
    private router: Router,
    private sharedConfigService: SharedConfigService,
  ) {}

  ngOnInit(): void {
    this.generalSubscription = this.sharedConfigService.generalObservable.subscribe((item: any) => {
      if (item && item.changeFor && item.changeFor === "commonFilter") {
        if(item.data && Object.keys(item.data).length > 0){
          this.selectedFilter = JSON.parse(JSON.stringify(item.data));
        }
        this.getReportData();
        this.sharedConfigService.generalSubscriptionData = {};
        this.sharedConfigService.detectGeneralSubscription();
      }
    });
  }

  ngOnDestroy(){
    this.generalSubscription.unsubscribe();
  }


  getReportData() {
    let reqPayload: any = {
      "searchText": "",
      "countryCode": this.selectedFilter.country,
      "cityList": this.selectedFilter.city > 0?[this.selectedFilter.city]:[],
      "hospitalList": [],
      "languageId": 1,
      "establishedYear": [],
      "bedCount": [],
      "specialityId": [],
      "treatmentIds": [],
      "pageIndex": 1,
      "pageSize": 100
    }
    this.cmsService.getHospitalList(reqPayload).subscribe((result: any) => {
      this.reportData = [];
      this.selectedCard = {};
      this.totalRecords = 0;
      if (result && result.length > 0) {
        this.reportData = [...result];
        this.totalRecords = Math.ceil(this.reportData.length / this.cardPerRow);
      }
    });
  }

  selectCard(dataObj: any, rowIndex: number) {
    if (dataObj.id !== this.selectedCard.id) {
      this.selectedCard = JSON.parse(JSON.stringify(dataObj));
      this.selectedCard.rowIndex = rowIndex;
    }
    else {
      this.selectedCard = {};
    }
  }

  gotToDetailPage(data: any) {
    return false;
    this.router.navigate([`/cms/hospitals/${data.id}`]);
  }

}

