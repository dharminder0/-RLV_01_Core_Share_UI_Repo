import { Component, OnInit } from '@angular/core';
import { faLocationPin, faNotesMedical, faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  faLocationPin = faLocationPin;
  faNotesMedical = faNotesMedical;
  faStar = faStar;

  public cardPerRow: number = 5;
  public totalRecords: number = 0;

  public selectedCard: any = {};

  public doctorsList: any = [
    {
      "id": 1,
      "name": "Dr. Magdy Shawky Shady",
      "qualification": [
        "MBBS",
        "abc"
      ],
      "department": "Surgical Oncology & Robotic Surgery",
      "speciality": "Psychology",
      "experience": "9 years",
      "about": "Dr. Rohit Kumar C graduated MBBS from Vijayanagara Institute of Medical Sciences (VIMS, Ballari) in 2008.",
      "img": "http://medical.eplug-ins.com/wp-content/uploads/2016/01/aa20580458_m-300x199.jpg",
      "awards": [

      ]
    },
    {
      "id": 2,
      "name": "Dr. Borimir J Darakchiev",
      "qualification": [
        "MBBS",
        "abc"
      ],
      "department": "Surgical Oncology & Robotic Surgery",
      "speciality": "Cardiology",
      "experience": "9 years",
      "about": "Dr. Rohit Kumar C graduated MBBS from Vijayanagara Institute of Medical Sciences (VIMS, Ballari) in 2008.",
      "img": "http://medical.eplug-ins.com/wp-content/uploads/2016/02/concierge-doctor701-300x199.jpg",
      "awards": [

      ]
    },
    {
      "id": 3,
      "name": "Dr A G K Gokhale",
      "qualification": [
        "MBBS",
        "abc"
      ],
      "department": "Surgical Oncology & Robotic Surgery",
      "speciality": "Diagnostic radiology",
      "experience": "9 years",
      "about": "Dr. Rohit Kumar C graduated MBBS from Vijayanagara Institute of Medical Sciences (VIMS, Ballari) in 2008.",
      "img": "http://medical.eplug-ins.com/wp-content/uploads/2016/01/default-doctor-category-300x199.jpg",
      "awards": [

      ]
    },
    {
      "id": 4,
      "name": "Dr. Keri Peterson MD",
      "qualification": [
        "MBBS",
        "abc"
      ],
      "department": "Surgical Oncology & Robotic Surgery",
      "speciality": "Cardiology",
      "experience": "9 years",
      "about": "Dr. Rohit Kumar C graduated MBBS from Vijayanagara Institute of Medical Sciences (VIMS, Ballari) in 2008.",
      "img": "http://medical.eplug-ins.com/wp-content/uploads/2016/02/doctor-v-nurse-704-300x199.jpg",
      "awards": [

      ]
    },
    {
      "id": 5,
      "name": "Dr. Modesto Fontanez",
      "qualification": [
        "MBBS",
        "abc"
      ],
      "department": "Surgical Oncology & Robotic Surgery",
      "speciality": "Cardiac Surgery",
      "experience": "9 years",
      "about": "Dr. Rohit Kumar C graduated MBBS from Vijayanagara Institute of Medical Sciences (VIMS, Ballari) in 2008.",
      "img": "http://medical.eplug-ins.com/wp-content/uploads/2016/01/feature-doctor1-300x199.jpg",
      "awards": [

      ]
    },
    {
      "id": 6,
      "name": "Dr. Robert Carras",
      "qualification": [
        "MBBS",
        "abc"
      ],
      "department": "Surgical Oncology & Robotic Surgery",
      "speciality": "Diagnostic radiology",
      "experience": "9 years",
      "about": "Dr. Rohit Kumar C graduated MBBS from Vijayanagara Institute of Medical Sciences (VIMS, Ballari) in 2008.",
      "img": "http://medical.eplug-ins.com/wp-content/uploads/2016/01/feature-doctor3-300x199.jpg",
      "awards": [

      ]
    },
    {
      "id": 7,
      "name": "Dr. Steven P. Leon",
      "qualification": [
        "MBBS",
        "abc"
      ],
      "department": "Surgical Oncology & Robotic Surgery",
      "speciality": "Diagnostic radiology",
      "experience": "9 years",
      "about": "Dr. Rohit Kumar C graduated MBBS from Vijayanagara Institute of Medical Sciences (VIMS, Ballari) in 2008.",
      "img": "http://medical.eplug-ins.com/wp-content/uploads/2016/01/bb20305841_m-300x196.jpg",
      "awards": [

      ]
    }
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
