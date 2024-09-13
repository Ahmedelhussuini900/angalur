import { Component, Input } from '@angular/core';
import { Student } from '../../Type/student.model';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styles: ``
})
export class StudentComponent {
  @Input() student!: Student;

}
