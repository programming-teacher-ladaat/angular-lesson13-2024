import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TryObsService {
  // מחלקה ששולחת הודעות למי שנירשם אליה

  // 1. הגדרת אוביקט שיכול לשלוח הודעות
  obs: Observable<string>;
  obsTimer: Observable<number>;
  timer = 10;

  constructor() {
    // 2. שליחת ההודעה
    // subscriber - מי שנירשם להודעה
    // subscribe - מי שהפעיל את הפעולה
    this.obs = new Observable<string>(subscriber => {
      subscriber.next("first next"); // שליחת הודעה
      subscriber.error("error!!!!!!!!!!!!"); // שליחת הודעת שגיאה - עוצרת את שליחת ההודעות
      subscriber.next("second next"); // שליחת הודעה
    });

    this.obsTimer = new Observable<number>(sub => {
      setInterval(() => {
        if (this.timer === -1)
          sub.complete();
        else
          sub.next(this.timer--);
      }, 1000)
    });
  }
}
