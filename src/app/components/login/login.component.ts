import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrySubjectService } from '../../services/try-subject.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  srv = inject(TrySubjectService);
  name = "";

  sendName() {
    this.srv.subject.next(this.name);
  }
}
