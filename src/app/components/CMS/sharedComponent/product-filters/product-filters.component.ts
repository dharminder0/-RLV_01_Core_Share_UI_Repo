import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import { faAngleDown, faSearch, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { CmsService } from '../../sharedServices/cms.service';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit {
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
    {"code": "speciality", "title": "Speciality"},
    {"code": "treatment", "title": "Treatment"},
    {"code": "hospitalAge", "title": "Hospital age"},
    {"code": "BedsRange", "title": "Beds range"},
    {"code": "experience", "title": "Experience"}
  ];
  public selectedFilterList:any = [];

  constructor(private cmsService: CmsService) {}

  ngOnInit(): void {
    this.getFilterList();
    this.getSpecialityList();
    this.getTreatmentList();
  }

  getFilterList(){
    this.filterCategoriesCopy = this.filterCategoriesOrg.filter((item:any) => {
      this.filterData[item.code] = [];
      this.selectFiltersObj[item.code] = [];
      if(item.code == 'hospitalAge' || item.code == 'BedsRange' || item.code == 'experience'){
        this.selectFiltersObj[item.code] = {"minValue": this.minValue,"maxValue": this.maxValue}
      }

      if(this.filterVisibleFor == 'hospitals'){
        if(item.code !== 'experience'){
          return item;
        }
      }
      else if(this.filterVisibleFor == 'doctors'){
        if(item.code !== 'hospitalAge' && item.code !== 'BedsRange'){
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
    }
    else{
      this.selectFiltersObj[category.code].splice(this.selectFiltersObj[category.code].indexOf(field.id),1);
    }
    this.getUpdatedFilteredList(category,field);
  }

  getUpdatedFilteredList(ct:any,fd:any){
    // debugger;
  }

}
