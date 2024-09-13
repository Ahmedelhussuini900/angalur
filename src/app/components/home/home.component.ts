import { Component,OnInit  } from '@angular/core';
import { StudentService } from '../../Services/student.service';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { Student } from '../../Type/student.model';
import { StudentComponent} from '../student/student.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule
    ,StudentComponent,
    RouterModule],
  providers:[StudentService],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit{

  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      (data: Student[]) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students', error);
      }
    );
  }
}
