import { Component, OnInit } from '@angular/core';
import { CmsService } from '../../sharedServices/cms.service';
import { SharedConfigService } from '../../sharedServices/shared-config.service';

@Component({
  selector: 'app-common-filters',
  templateUrl: './common-filters.component.html',
  styleUrls: ['./common-filters.component.scss']
})
export class CommonFiltersComponent implements OnInit {

  public selectedCountry: number = 1;
  public selectedCity: number = 0;

  public countryList: any = [];
  public cityList: any = [];

  constructor(private cmsService: CmsService, private sharedConfigService: SharedConfigService) { }

  ngOnInit(): void {
    this.getCountryList();
  }

  getCountryList() {
    this.cmsService.getCountryList().subscribe((result: any) => {
      this.countryList = [];
      if (result && result.length > 0) {
        this.countryList = [...result];
        this.getCityList();
      }
    });
  }

  getCityList() {
    this.selectedCity = 0;
    this.cmsService.getCityList(this.selectedCountry).subscribe((result: any) => {
      this.cityList = [];
      if (result && result.length > 0) {
        this.cityList = [...result];
      }
    });
    this.setGeneralSubscription();
  }

  setGeneralSubscription(){
    this.sharedConfigService.generalSubscriptionData = {"changeFor": "commonFilter", "data": {"selectedCountry": this.selectedCountry, "selectedCity": this.selectedCity}};
    this.sharedConfigService.detectGeneralSubscription();
  }

}
