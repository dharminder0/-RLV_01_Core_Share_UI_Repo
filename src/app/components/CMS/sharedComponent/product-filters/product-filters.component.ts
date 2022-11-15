import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faAngleDown, faSearch, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { CmsService } from '../../sharedServices/cms.service';
import { SharedConfigService } from '../../sharedServices/shared-config.service';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit, OnDestroy {
  
  private generalSubscription:any = Subscription;
  @Input() filterVisibleFor:string="";
  
  faAngleDown = faAngleDown;
  faSearch = faSearch;
  faTimesCircle = faTimesCircle;
  
  minValue: number = 0;
  maxValue: number = 250;
  sliderOptions: Options = {
    floor: 0,
    ceil: 250
  };

  public filterData: any = {};
  public selectFiltersObj: any = {};
  public searchBy: any = {};

  public filterCategoriesCopy: any = [];
  public filterCategoriesOrg: any = [
    {"code": "speciality", "title": "Speciality", "type": "string"},
    {"code": "treatment", "title": "Treatment", "type": "string"},
    {"code": "hospitalAge", "title": "Hospital age", "type": "numeric"},
    {"code": "bedsRange", "title": "Beds range", "type": "numeric"},
    {"code": "experience", "title": "Experience", "type": "numeric"}
  ];
  public selectedFilterList:any = [];

  constructor(private cmsService: CmsService, private sharedConfigService: SharedConfigService) {}

  ngOnInit(): void {
    this.getFilterList();
    this.getSpecialityList();
    this.getTreatmentList();
    this.detectGeneralSubscription();
  }

  ngOnDestroy(){
    this.generalSubscription.unsubscribe();
  }

  detectGeneralSubscription() {
    this.generalSubscription = this.sharedConfigService.generalObservable.subscribe((item: any) => {
      if (item && item.changeFor && item.changeFor === "removeProductFilter") {
        let tempArray:any = [];
        if (item.data) {
          this.selectedFilterList = [...item.data];
          this.selectedFilterList.map((data:any) => {
            tempArray.push(data.code);
          });
          for (let key in this.selectFiltersObj){
            if(key === 'hospitalAge' || key === 'bedsRange' || key === 'experience'){
              if(!tempArray.includes(key)){
                this.selectFiltersObj[key] = {"minValue": this.minValue,"maxValue": this.maxValue};
              }
            }
            else{
              if(!tempArray.includes(key)){
                this.selectFiltersObj[key] = [];
              }
            }
          }
        }
        this.sharedConfigService.generalSubscriptionData = {};
        this.sharedConfigService.detectGeneralSubscription();
      }
    });
  }

  getFilterList(){
    this.filterCategoriesCopy = this.filterCategoriesOrg.filter((item:any) => {
      this.filterData[item.code] = [];
      this.selectFiltersObj[item.code] = [];
      if(item.type === 'numeric'){
        this.selectFiltersObj[item.code] = {"minValue": this.minValue,"maxValue": this.maxValue}
      }

      if(this.filterVisibleFor == 'hospitals'){
        if(item.code !== 'experience'){
          return item;
        }
      }
      else if(this.filterVisibleFor == 'doctors'){
        if(item.code !== 'hospitalAge' && item.code !== 'bedsRange'){
          return item;
        }
      }
    });
  }

  getSpecialityList(){
    this.cmsService.getTreatmentList().subscribe((result: any) => {
      this.filterData['speciality'] = [];
      if (result && result.length > 0) {
        this.filterData['speciality'] = [...result];
      }
    });
  }

  getTreatmentList(){
    this.cmsService.getTreatmentList().subscribe((result: any) => {
      this.filterData['treatment'] = [];
      if (result && result.length > 0) {
        this.filterData['treatment'] = [...result];
      }
    });
  }

  updateFilter(category:any, field:any){
    if(!this.selectFiltersObj[category.code]){
      this.selectFiltersObj[category.code] = [];
    }
    if(!this.selectFiltersObj[category.code].includes(field.id)){
      this.selectFiltersObj[category.code].push(field.id);
      this.getUpdatedFilteredList(category,field);
    }
    else{
      this.selectFiltersObj[category.code].splice(this.selectFiltersObj[category.code].indexOf(field.id),1);
      this.getUpdatedFilteredList(category,field);
    }
  }

  getUpdatedFilteredList(ct:any,fd:any){
    let tempObj: any = {};
    let isExistingValue: boolean = false;
    if(this.selectedFilterList && this.selectedFilterList.length > 0){
      this.selectedFilterList = this.selectedFilterList.filter((item:any) => {
        if(item.code === ct.code){
          isExistingValue = true;
          if(ct.type == 'numeric'){
            item.minValue = fd.minValue;
            item.maxValue = fd.maxValue;
          }
          else{
            if (!item.value.includes(fd.title)) {
              item.value.push(fd.title);
            }
            else{
              item.value.splice(item.value.indexOf(fd.title), 1);
            }
          }
        }
        return item;
      });
    }
    // Adding new filter
    if(!isExistingValue){
      if(ct.type == 'numeric'){
        tempObj = {"code": ct.code, "title": ct.title, "type": "numeric", "minValue": fd.minValue,"maxValue": fd.maxValue};
      }
      else{
        tempObj = {"code": ct.code, "title": ct.title, "type": "string", "value": [fd.title]};
      }
      this.selectedFilterList.push(tempObj);
    }
    this.sharedConfigService.generalSubscriptionData = {"changeFor": "addProductFilter", "data": this.selectedFilterList};
    this.sharedConfigService.detectGeneralSubscription();
  }

}
