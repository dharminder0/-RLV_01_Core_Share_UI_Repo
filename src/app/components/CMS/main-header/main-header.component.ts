import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faSearch, faPhone, faSquareEnvelope, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  faSearch = faSearch;
  faPhone = faPhone;
  faSquareEnvelope = faSquareEnvelope;
  faCaretDown = faCaretDown

  public isMobile: boolean = false;

  public headerDetails: any = {
    "logo": "https://bootstrapshuffle.com/static/img/shuffle-frameworks/shuffle-for-bootstrap-color.svg",
    "supportPhone": "+91-9560960088",
    "supportEmail": "support@rlv.com",
    "primaryColor": "#df3631",
    "secondaryColor": "#0f8587"
  };

  public headerMenu: any = [
    { "code": "home", "label": "Home" },
    { "code": "doctors", "label": "Doctors" },
    { "code": "hospitals", "label": "Hospitals" },
    {
      "code": "treatments",
      "label": "Treatments",
      "subMenu": [
        { "code": "aboutUs", "label": "About Us" },
        { "code": "services", "label": "Services" },
      ]
    },
    { "code": "register", "label": "Register" },
    {
      "code": "login",
      "label": "Login",
      "subMenu": [
        { "code": "loginUser", "label": "Login As User" },
        { "code": "loginDoctor", "label": "Login As Doctor" },
      ]
    },
    {
      "code": "help",
      "label": "Help",
      "subMenu": [
        { "code": "aboutUs", "label": "About Us" },
        { "code": "services", "label": "Services" },
      ]
    }
  ];

  public selectedMenu: string = "home";

  constructor(private router: Router,private activatedRoute: ActivatedRoute, private deviceService: DeviceDetectorService) {
    this.isMobile = this.deviceService.isMobile();
    if(this.headerMenu && this.headerMenu.length > 0){
      this.headerMenu.map((item:any) => {
        if(this.router.url && this.router.url.includes(item.code)){
          this.selectedMenu = item.code;
        }
      });
    }
   }

  ngOnInit(): void {

  }

  pageNavigation(page:string){
    let selectedFilters: any = {};
    if(this.activatedRoute.snapshot && this.activatedRoute.snapshot.queryParamMap && Object.keys(this.activatedRoute.snapshot.queryParamMap).length > 0){
      selectedFilters = this.activatedRoute.snapshot.queryParamMap;
    }
    let tempObject: any = { country: selectedFilters.get('country'), city: selectedFilters.get('city') };
    const queryParams: Params = tempObject;
    this.router.navigate([`/cms/${page}`],
      {
        relativeTo: this.activatedRoute,
        queryParams: queryParams,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });

  }
}