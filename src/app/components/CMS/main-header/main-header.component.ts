import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faPhone, faSquareEnvelope, faCaretDown } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private router: Router) {
    if(this.router.url){
      this.selectedMenu = this.router.url?this.router.url.split('/')[2]:this.selectedMenu;
    }
   }

  ngOnInit(): void {

  }
}