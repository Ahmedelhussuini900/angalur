import { Component,OnInit  } from '@angular/core';
import { StudentService } from '../../Services/student.service';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { Student } from '../../Type/student.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,
    RouterModule],
  providers:[StudentService],

  templateUrl: './details.component.html',
  styles: ``
})
export class DetailsComponent implements OnInit {
  
  student: Student ={
    id: 0,
    name: '',
    age: 0,
    gender: '',
    // address: undefined,
    email: '',
    phone: '',
    courses: [],
    gpa: 0,
    image: ''
  };  
  ID = 0;  

  constructor(myRoute:ActivatedRoute,private studentService: StudentService) {
    this.ID = myRoute.snapshot.params['id'];

   }

  ngOnInit(): void {
    this.studentService.GetStudentByID(this.ID).subscribe(
      (data: Student) => {
        this.student = data;
      },
      (error) => {
        console.error('Error fetching students', error);
      }
    );
  }
}
