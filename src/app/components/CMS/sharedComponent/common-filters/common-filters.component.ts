import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CmsService } from '../../sharedServices/cms.service';
import { SharedConfigService } from '../../sharedServices/shared-config.service';

@Component({
  selector: 'app-common-filters',
  templateUrl: './common-filters.component.html',
  styleUrls: ['./common-filters.component.scss']
})
export class CommonFiltersComponent implements OnInit {

  public selectedFilters: any = {};

  public countryList: any = [];
  public cityList: any = [];

  constructor(
    private cmsService: CmsService,
    private router: Router,
    private activatedRoute: ActivatedRoute, 
    private sharedConfigService: SharedConfigService
  ) { 
    //this.getIpDetails();
    if(this.activatedRoute.snapshot && this.activatedRoute.snapshot.queryParamMap && Object.keys(this.activatedRoute.snapshot.queryParamMap).length > 0){
      let tempObj:any = this.activatedRoute.snapshot.queryParamMap;
      this.selectedFilters.country = tempObj.get('country')?tempObj.get('country'):"IN";
      this.selectedFilters.city =  tempObj.get('city')?parseInt(tempObj.get('city')):0;
    }
  }

  ngOnInit(): void {
    this.getCountryList();
  }

  getCountryList() {
    this.cmsService.getCountryList().subscribe((result: any) => {
      this.countryList = [];
      if (result && result.length > 0) {
        this.countryList = [...result];
        this.getCityList(false);
      }
    });
  }

  getCityList(isCountryChanged:boolean) {
    if(isCountryChanged){
      this.selectedFilters.city = 0;
    }
    this.cmsService.getCityList(this.selectedFilters.country).subscribe((result: any) => {
      this.cityList = [];
      if (result && result.length > 0) {
        this.cityList = [...result];
      }
    });
    this.setGeneralSubscription();
  }
  
  setFilterParams() {
    if(this.selectedFilters && Object.keys(this.selectedFilters).length > 0){
      let tempObj: any = JSON.parse(JSON.stringify(this.selectedFilters));
      for (let prop in tempObj) {
        if(tempObj[prop] == "0"){
          delete tempObj[prop];
        }
      }
      const queryParams: Params = tempObj;
      this.router.navigate([this.router.url.split('?')[0]],
        {
          relativeTo: this.activatedRoute,
          queryParams: queryParams,
        }
      );
    }
  }

  setGeneralSubscription(){
    this.setFilterParams();
    this.sharedConfigService.generalSubscriptionData = {"changeFor": "commonFilter", "data": this.selectedFilters};
    this.sharedConfigService.detectGeneralSubscription();
  }

}
