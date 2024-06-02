import { Component, inject, OnInit } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ObsErrComponent } from './components/obs-err/obs-err.component';
import { TryObservableComponent } from './components/try-observable/try-observable.component';
import { TrySubjectService } from './services/try-subject.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TryObservableComponent, ObsErrComponent,
    NavbarComponent, LoginComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  srv = inject(TrySubjectService);
  title = 'lesson13';
  isOK = true;

  list: any[] = [];

  constructor() {
    // this.list = this.srv.posts;
  }

  ngOnInit(): void {
    this.srv.Posts$.subscribe(posts => {
      console.log('subscribe');

      this.list = posts;
    });
  }

  addPost() {
    const newPost = { id: 111111111, title: 'bla bla bla' };
    // this.srv.posts$.next([newPost, ...this.list])
    this.srv.addPost(newPost);
  }
}
