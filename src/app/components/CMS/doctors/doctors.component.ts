import { Component, OnDestroy, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { CmsService } from '../sharedServices/cms.service';
import { SharedConfigService } from '../sharedServices/shared-config.service';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit, OnDestroy {
  private generalSubscription:any = Subscription;

  // Objects
  public selectedCard: any = {};

  // Array
  public reportData: any = [];

  // Numeric
  public cardPerRow: number = 5;
  public totalRecords: number = 0;
  
  public selectedCountry: number = 1;
  public selectedCity: number = 0;


  constructor(
    private cmsService: CmsService,
    private sharedConfigService: SharedConfigService
  ) {
    this.totalRecords = Math.ceil(this.reportData.length / this.cardPerRow);
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
    let reqPayload:any = {
      "searchText": "",
      "countryId": this.selectedCountry,
      "cityList": this.selectedCity > 0?[this.selectedCity]:[],
      "hospitalList": [],
      "languageId": 1
    };

    this.cmsService.getDoctorsList(reqPayload).subscribe((result: any) => {
      this.reportData = [];
      this.totalRecords = 0;
      if (result && result.length > 0) {
        result.map((item:any) => {
          item.img = "https://rlvcontents.blob.core.windows.net/doctor/Dr.%20Abhinav%20Aggarwal.JPG";
        });
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

}
