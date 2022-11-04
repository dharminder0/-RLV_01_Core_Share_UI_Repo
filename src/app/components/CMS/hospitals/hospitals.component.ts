import { Component, OnInit } from '@angular/core';
import { faLocationPin, faNotesMedical, faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {

  faLocationPin = faLocationPin;
  faNotesMedical = faNotesMedical;
  faStar = faStar;

  public cardPerRow: number = 5;
  public totalRecords: number = 0;

  public selectedCard: any = {};

  public doctorsList: any = [
    {
      "id": 1,
      "name": "Calvary Hospital",
      "img": "http://medical.eplug-ins.com/wp-content/uploads/2015/11/9467471-large-300x225.jpg",
      "speciality": "Cardiac Surgery",
      "city": "",
      "country": "",
      "establishedInYear": "2001",
      "about": "Mayo Clinic in Rochester, MN is ranked nationally in 15 adult and 10 pediatric specialties. It was also high-performing in 1 adult specialty. Mayo Clinic is a 1,132-bed general medical and surgical facility with 62,400 admissions in the most recent year reported. It performed 50,918 annual inpatient and 21,035 outpatient surgeries. Its emergency room had 79,542 visits. It is also accredited by the Commission on Accreditation of Rehabilitation Facilities (CARF).",
      "Infrastructure": "Rich editor text",
      "doctorList": [
        {
          "id": 2,
          "name": "Dr. Borimir J Darakchiev",
          "department": "Surgical Oncology & Robotic Surgery",
        }
      ]
    },
    {
      "id": 2,
      "name": "Duke Hospital",
      "img": "http://medical.eplug-ins.com/wp-content/uploads/2015/11/6a00d8341c666d53ef0120a5ceb13e970b-300x225.jpg",
      "speciality": "Cardiology",
      "city": "",
      "country": "",
      "establishedInYear": "2002",
      "about": "Mayo Clinic in Rochester, MN is ranked nationally in 15 adult and 10 pediatric specialties. It was also high-performing in 1 adult specialty. Mayo Clinic is a 1,132-bed general medical and surgical facility with 62,400 admissions in the most recent year reported. It performed 50,918 annual inpatient and 21,035 outpatient surgeries. Its emergency room had 79,542 visits. It is also accredited by the Commission on Accreditation of Rehabilitation Facilities (CARF).",
      "Infrastructure": "Rich editor text",
      "doctorList": [
        {
          "id": 2,
          "name": "Dr. Borimir J Darakchiev",
          "department": "Surgical Oncology & Robotic Surgery",
        }
      ]
    },
    {
      "id": 3,
      "name": "NYU MEDICAL CENTER",
      "img": "http://medical.eplug-ins.com/wp-content/uploads/2015/11/10145663-large-300x225.jpg",
      "speciality": "Dietetics",
      "city": "",
      "country": "",
      "establishedInYear": "2001",
      "about": "Mayo Clinic in Rochester, MN is ranked nationally in 15 adult and 10 pediatric specialties. It was also high-performing in 1 adult specialty. Mayo Clinic is a 1,132-bed general medical and surgical facility with 62,400 admissions in the most recent year reported. It performed 50,918 annual inpatient and 21,035 outpatient surgeries. Its emergency room had 79,542 visits. It is also accredited by the Commission on Accreditation of Rehabilitation Facilities (CARF).",
      "Infrastructure": "Rich editor text",
      "doctorList": [
        {
          "id": 2,
          "name": "Dr. Borimir J Darakchiev",
          "department": "Surgical Oncology & Robotic Surgery",
        }
      ]
    },
    {
      "id": 4,
      "name": "MOUNT SINAI HOSPITAL",
      "img": "http://medical.eplug-ins.com/wp-content/uploads/2015/11/ShamianBuildings-300x225.jpg",
      "speciality": "Cardiac Surgery",
      "city": "",
      "country": "",
      "establishedInYear": "2001",
      "about": "Mayo Clinic in Rochester, MN is ranked nationally in 15 adult and 10 pediatric specialties. It was also high-performing in 1 adult specialty. Mayo Clinic is a 1,132-bed general medical and surgical facility with 62,400 admissions in the most recent year reported. It performed 50,918 annual inpatient and 21,035 outpatient surgeries. Its emergency room had 79,542 visits. It is also accredited by the Commission on Accreditation of Rehabilitation Facilities (CARF).",
      "Infrastructure": "Rich editor text",
      "doctorList": [
        {
          "id": 2,
          "name": "Dr. Borimir J Darakchiev",
          "department": "Surgical Oncology & Robotic Surgery",
        }
      ]
    },
    {
      "id": 5,
      "name": "CLEVELAND CLINIC",
      "img": "http://medical.eplug-ins.com/wp-content/uploads/2016/02/xenex-blog-cooley-dickinson-300x225.jpg",
      "speciality": "Cardiology",
      "city": "",
      "country": "",
      "establishedInYear": "2001",
      "about": "Mayo Clinic in Rochester, MN is ranked nationally in 15 adult and 10 pediatric specialties. It was also high-performing in 1 adult specialty. Mayo Clinic is a 1,132-bed general medical and surgical facility with 62,400 admissions in the most recent year reported. It performed 50,918 annual inpatient and 21,035 outpatient surgeries. Its emergency room had 79,542 visits. It is also accredited by the Commission on Accreditation of Rehabilitation Facilities (CARF).",
      "Infrastructure": "Rich editor text",
      "doctorList": [
        {
          "id": 2,
          "name": "Dr. Borimir J Darakchiev",
          "department": "Surgical Oncology & Robotic Surgery",
        }
      ]
    },
    {
      "id": 6,
      "name": "JOHNS HOPKINS HOSPITAL",
      "img": "http://medical.eplug-ins.com/wp-content/uploads/2015/11/380px-HPS-lamps-300x225.jpg",
      "speciality": "Dietetics",
      "city": "",
      "country": "",
      "establishedInYear": "2001",
      "about": "Mayo Clinic in Rochester, MN is ranked nationally in 15 adult and 10 pediatric specialties. It was also high-performing in 1 adult specialty. Mayo Clinic is a 1,132-bed general medical and surgical facility with 62,400 admissions in the most recent year reported. It performed 50,918 annual inpatient and 21,035 outpatient surgeries. Its emergency room had 79,542 visits. It is also accredited by the Commission on Accreditation of Rehabilitation Facilities (CARF).",
      "Infrastructure": "Rich editor text",
      "doctorList": [
        {
          "id": 2,
          "name": "Dr. Borimir J Darakchiev",
          "department": "Surgical Oncology & Robotic Surgery",
        }
      ]
    },
  ];

  constructor() {
    this.totalRecords = Math.ceil(this.doctorsList.length / this.cardPerRow);
   }

  ngOnInit(): void {
  }

  selectCard(dataObj:any, rowIndex:number){
    if(dataObj.id !== this.selectedCard.id){
      this.selectedCard = JSON.parse(JSON.stringify(dataObj)) ; 
      this.selectedCard.rowIndex = rowIndex;
    }
    else{
      this.selectedCard = {};
    }
  }

}
