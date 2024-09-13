import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './components/header/header.component';
import { ErrorComponent} from './components/error/error.component';
import { HomeComponent} from './components/home/home.component';
import { StudentComponent} from './components/student/student.component';
import { UpdateComponent} from './components/update/update.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    ErrorComponent,
    HomeComponent,
    StudentComponent,
    UpdateComponent
  ],
    templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab5Project';
}
