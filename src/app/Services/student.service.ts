import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../Type/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://freetestapi.com/api/v1/students';

  constructor(private readonly http:HttpClient) { }


  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  GetStudentByID(id:any){
    return this.http.get<Student>(this.apiUrl+"/"+id);
  }
}
