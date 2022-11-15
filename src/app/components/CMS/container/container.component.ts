import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  public isLoaderEnabled: boolean = true;;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaderEnabled = false;
    }, 1000);
  }

}
