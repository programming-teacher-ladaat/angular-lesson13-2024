import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrySubjectService {
  private http = inject(HttpClient);

  // observable-הרחבה ל
  // next/error/complete - פעולות של שליחת מידע
  // subscribe/unsubscribe - הרשמה/ביטול רישום
  subject: Subject<string> = new Subject<string>();
  // user = "guest"

  // posts: any[] = [];
  // private posts$: Subject<any[]> = new Subject<any[]>();
  private posts$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  // Subject-זהה ל
  // מקבל ערך התחלתי
  // ניתן לקבל את הערך באופן חד-פעמי גם ללא הרשמה

  public get currentPosts() {
    return this.posts$.value;
  }

  public get Posts$() {
    return this.posts$.asObservable(); // מחוץ לסרויס ניתן להירשם לקבלת מידע
  }

  addPost(post: any) {
    this.http.post<any[]>('https://jsonplaceholder.typicode.com/posts', post)
      .subscribe({
        next: data => {
          this.posts$.next(data);
          console.log('in service - add', data);
        },
        error: (e) => this.posts$.error('my error' + e)
      });
  }

  constructor() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.posts$.next(data);
        console.log('in service', data);
      });
  }


}
