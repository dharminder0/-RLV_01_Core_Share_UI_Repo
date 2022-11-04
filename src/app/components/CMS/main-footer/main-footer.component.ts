import { Component, OnInit } from '@angular/core';
import { faSearch, faPhone, faEnvelope, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedinIn, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'



@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {

  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedinIn;
  faFacebookF = faFacebookF;


  constructor() { }

  ngOnInit(): void {
  }

}
