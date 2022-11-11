import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-filters-view',
  templateUrl: './selected-filters-view.component.html',
  styleUrls: ['./selected-filters-view.component.scss']
})
export class SelectedFiltersViewComponent implements OnInit {

  public selectedFilterList: any = [
    {"code": "speciality", "title": "Speciality", "type": "string", "value": "text One"},
    {"code": "treatment", "title": "Treatment", "type": "string", "value": "text Two, text Three"},
    {"code": "hospitalAge", "title": "Hospital age", "type": "numeric", "minValue": "2001","maxValue": "2010"},
    {"code": "BedsRange", "title": "Beds range", "type": "numeric", "minValue": "100","maxValue": "200"},
    {"code": "experience", "title": "Experience", "type": "numeric", "minValue": "5","maxValue": "10"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  removeSelectedFilter(code:string) {
    this.selectedFilterList = this.selectedFilterList.filter((item:any) => {
      if(item.code !== code){
        return item;
      }
    })
  }

}
