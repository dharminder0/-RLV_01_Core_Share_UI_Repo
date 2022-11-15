import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedConfigService } from '../../sharedServices/shared-config.service';

@Component({
  selector: 'app-selected-filters-view',
  templateUrl: './selected-filters-view.component.html',
  styleUrls: ['./selected-filters-view.component.scss']
})
export class SelectedFiltersViewComponent implements OnInit, OnDestroy {
  
  private generalSubscription:any = Subscription;
  public selectedFilterList: any = [];

  constructor(private sharedConfigService: SharedConfigService) { }

  ngOnInit(): void {
    this.detectGeneralSubscription();
  }

  ngOnDestroy(){
    this.generalSubscription.unsubscribe();
  }

  detectGeneralSubscription() {
    this.generalSubscription = this.sharedConfigService.generalObservable.subscribe((item: any) => {
      if (item && item.changeFor && item.changeFor === "addProductFilter") {
        if (item.data && item.data.length > 0) {
          this.selectedFilterList = item.data.filter((data: any) => {
            if (data.type === 'numeric') {
              if (data.minValue !== 0 || data.maxValue !== 250) {
                return data;
              }
            }
            else {
              if (data.value && data.value.length > 0) {
                return data;
              }
            }
          })
        }
        else {
          this.selectedFilterList = [];
        }
        this.sharedConfigService.generalSubscriptionData = {};
        this.sharedConfigService.detectGeneralSubscription();
      }
    });
  }

  removeSelectedFilter(code:string) {
    this.selectedFilterList = this.selectedFilterList.filter((item:any) => {
      if(item.code !== code){
        return item;
      }
    });
    this.sharedConfigService.generalSubscriptionData = {"changeFor": "removeProductFilter", "data": this.selectedFilterList};
    this.sharedConfigService.detectGeneralSubscription();
  }

}
