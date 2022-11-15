import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth'});
    console.log(this.router);
  }

}
