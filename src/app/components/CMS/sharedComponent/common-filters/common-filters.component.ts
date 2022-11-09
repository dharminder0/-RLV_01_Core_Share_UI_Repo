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

  public selectedCountry: number = 1;
  public selectedCity: number = 0;

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
      this.selectedCountry = tempObj.get('country')?tempObj.get('country'):this.selectedCountry;
      this.selectedCity =  tempObj.get('city')?parseInt(tempObj.get('city')):this.selectedCity;
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
        this.getCityList();
      }
      this.setGeneralSubscription();
    });
  }

  getCityList() {
    this.cmsService.getCityList(this.selectedCountry).subscribe((result: any) => {
      this.cityList = [];
      if (result && result.length > 0) {
        this.cityList = [...result];
      }
    });
  }

  setFilterParams() {
    let tempObject: any = { country: this.selectedCountry };
    if (this.selectedCity > 0) {
      tempObject['city'] = this.selectedCity;
    }
    const queryParams: Params = tempObject;
    this.router.navigate([this.router.url.split('?')[0]],
      {
        relativeTo: this.activatedRoute,
        queryParams: queryParams,
       // queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

  setGeneralSubscription(){
    this.setFilterParams();
    this.sharedConfigService.generalSubscriptionData = {"changeFor": "commonFilter", "data": {"country": this.selectedCountry, "city": this.selectedCity}};
    this.sharedConfigService.detectGeneralSubscription();
  }

}
