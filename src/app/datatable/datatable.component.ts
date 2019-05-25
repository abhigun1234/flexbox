import { Component, OnInit } from '@angular/core';
import {CourseService} from '..//course.service'
import {MatTableDataSource} from '@angular/material'
// const ELEMENT_DATA = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})

export class DatatableComponent implements OnInit {
  COURSE_DATA=[]
  // COURSE_DATA = [
  //   {
  //     "Id": 1,
  //     "name": "Python",
  //     "fees": "2000",
  //     "duration": "30 hours",
  //     "description": "Python with django framework",
  //     "imageUrl": "http://nirali23.0fees.us/courses_title.jpg",
  //     "videoUrl": "http://nirali23.0fees.us/unix.jpg"
  //     },
  //       {
  //     "Id": 2,
  //     "name": "java",
  //     "fees": "2000",
  //     "duration": "35 hours",
  //     "description": "java web app development",
  //     "imageUrl": "http://nirali23.0fees.us/courses_title_K1uAPsL.jpg",
  //     "videoUrl": "http://nirali23.0fees.us/courses_title_Wc2w0wz.jpg"
  //     },
  //       {
  //     "Id": 3,
  //     "name": "testing",
  //     "fees": "500",
  //     "duration": "35 hours",
  //     "description": "Testing by Vishal",
  //     "imageUrl": "http://nirali23.0fees.us/courses_title_1FrBhmo.jpg",
  //     "videoUrl": "http://nirali23.0fees.us/courses_title_qdUB5CV.jpg"
  //     },
  //       {
  //     "Id": 4,
  //     "name": "selenium +cuckumber",
  //     "fees": "2000",
  //     "duration": "35 hours",
  //     "description": "selenium +cuckumber",
  //     "imageUrl": "http://nirali23.0fees.us/courses_title_cL0Qefu.jpg",
  //     "videoUrl": "http://nirali23.0fees.us/courses_title_loG9y51.jpg"
  //     },
  //       {
  //     "Id": 5,
  //     "name": "spring +hybernet",
  //     "fees": "2000",
  //     "duration": "34 hours",
  //     "description": "java hybernet",
  //     "imageUrl": "http://nirali23.0fees.us/courses_title_C8aX7u2.jpg",
  //     "videoUrl": "http://nirali23.0fees.us/courses_title_BTnjsat.jpg"
  //     }
  //     ,
  // ];
  displayedColumns: string[] = ['Id','name','fees','duration','description','imageUrl','videoUrl'];
dataSource=this.COURSE_DATA;
  constructor(public course:CourseService ) { }

  ngOnInit() {
  
  }
  
  

}
