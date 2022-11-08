import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SharedConfigService } from '../../shared/shared-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faStar = faStar;
  owlOptions;

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
  public hospitalList: any = [
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

  constructor(private sharedConfigService: SharedConfigService) { 
    this.owlOptions = this.sharedConfigService.owlOptions;

  }

  ngOnInit(): void {
  }

}
