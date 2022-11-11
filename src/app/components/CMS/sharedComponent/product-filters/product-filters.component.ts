import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { CmsService } from '../../sharedServices/cms.service';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit {
  @Input() filterVisibleFor:string="";
  
  minValue: number = 50;
  maxValue: number = 200;
  sliderOptions: Options = {
    floor: 0,
    ceil: 250
  };

  faAngleDown = faAngleDown;

  public filterData: any = {};
  public selectedFilters: any = {};

  public filterCategoriesCopy: any = [];
  public filterCategoriesOrg: any = [
    {"code": "department", "title": "Department"},
    {"code": "treatment", "title": "Treatment"},
    {"code": "hospitalAge", "title": "Hospital age"},
    {"code": "BedsRange", "title": "Beds range"},
    {"code": "experience", "title": "Experience"}
  ];

  constructor(private cmsService: CmsService) {}

  ngOnInit(): void {
    this.getFilterList();
    this.getDepartmentList();
    this.getTreatmentList();
  }

  getFilterList(){
    this.filterCategoriesCopy = this.filterCategoriesOrg.filter((item:any) => {
      this.filterData[item.code] = [];
      this.selectedFilters[item.code] = [];
      if(item.code == 'hospitalAge' || item.code == 'BedsRange'){
        this.selectedFilters[item.code] = {"minValue": this.minValue,"maxValue": this.maxValue}
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

  getDepartmentList(){
    this.cmsService.getTreatmentList().subscribe((result: any) => {
      this.filterData['department'] = [];
      if (result && result.length > 0) {
        this.filterData['department'] = [...result];
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

  updateFilter(type:string, id:number){
    if(!this.selectedFilters[type]){
      this.selectedFilters[type] = [];
    }
    if(!this.selectedFilters[type].includes(id)){
      this.selectedFilters[type].push(id);
    }
    else{
      this.selectedFilters[type].splice(this.selectedFilters[type].indexOf(id),1);
    }
    console.log(this.selectedFilters);
  }

}
