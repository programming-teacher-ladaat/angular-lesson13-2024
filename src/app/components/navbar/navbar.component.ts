import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { TrySubjectService } from '../../services/try-subject.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  srv = inject(TrySubjectService);
  myName: string = '';


  ngOnInit(): void {
    this.srv.subject.subscribe(data => this.myName = data);
  }

  ngOnDestroy(): void {
    this.srv.subject.unsubscribe();
  }
}
