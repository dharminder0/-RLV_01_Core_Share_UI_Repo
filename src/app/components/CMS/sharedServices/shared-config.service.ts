import { Injectable } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Injectable({
  providedIn: 'root'
})
export class SharedConfigService {

  public owlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 10,
    navText: ['&#x2190;', '&#x2192;'],
    responsive: {
      0: {
        items: 1 
      },
      480: {
        items: 2
      },
      767: {
        items: 3
      },
      1024: {
        items: 4
      },
      1920: {
        items: 5
      }
    },
    nav: true
  }

  constructor() { }
}
