import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(public httpClient:HttpClient) { 

  }

  getCourseDetails()
  {
    return this.httpClient.get('https://dronaonlineadmin.herokuapp.com/courses/')
  }
}
