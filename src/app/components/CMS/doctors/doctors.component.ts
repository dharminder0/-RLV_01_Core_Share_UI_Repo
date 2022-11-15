import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public selectedFilter: any = {};

  // Array
  public reportData: any = [];

  // Numeric
  public cardPerRow: number = 3;
  public totalRecords: number = 0;

  // for pagination
  public pageNumber: number = 1;
  public pageSize: number = 10;
  public totalReportCount: number = 0;
  public reportViewCount: number = 0;
  public filteredReportCount: number = 0;
  public paginationStartRnage: any = (this.pageNumber - 1) * this.pageSize + 1;
  public paginationEndRnage: any = (this.pageNumber - 1) * this.pageSize + this.pageSize;


  constructor(
    private cmsService: CmsService,
    private router: Router,
    private sharedConfigService: SharedConfigService
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
      "yearExperience": [],
      "specialityId": [],
      "treatmentIds": [],
      "pageIndex": this.pageNumber,
      "pageSize": this.pageSize
    }

    this.cmsService.getDoctorsList(reqPayload).subscribe((result: any) => {
      this.reportData = [];
      this.reportViewCount = 0;
      this.selectedCard = {};
      this.totalRecords = 0;
      if (result && result.length > 0) {
        this.reportData = [...result];
        this.totalRecords = Math.ceil(this.reportData.length / this.cardPerRow);
      }
      // for pagination
      this.totalReportCount = result.total;
      this.filteredReportCount = this.totalReportCount;
      this.reportViewCount = Math.ceil(this.totalReportCount / this.pageSize);
      this.paginationStartRnage = (this.pageNumber - 1) * this.pageSize + 1;
      if (this.reportData.length < this.pageSize) {
        this.paginationEndRnage = (this.pageNumber - 1) * this.pageSize + this.reportData.length;
      }
      else {
        this.paginationEndRnage = (this.pageNumber - 1) * this.pageSize + this.pageSize;
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
    this.router.navigate([`/cms/doctors/${data.id}`]);
  }

}
