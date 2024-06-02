import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TryObsService } from '../../services/try-obs.service';

@Component({
  selector: 'app-try-observable',
  standalone: true,
  imports: [],
  templateUrl: './try-observable.component.html',
  styleUrl: './try-observable.component.scss'
})
export class TryObservableComponent implements OnInit, OnDestroy {
  srv = inject(TryObsService);
  t?: number;
  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    // 3. רישום לקבלת ההודעות
    // next/error/complete - הפונקציות יקרו כאשר תישלח הודעה מהסרויס

    // this.srv.obs.subscribe(data => {
    //   console.log(data); // next ההודעה שנשלחה עם
    // });

    this.subscription.add(
      this.srv.obs.subscribe({
        next: n => console.log(n),
        complete: () => console.log('finish'),
        // error: err => alert(err),
      })
    );

    this.subscription.add(
      this.srv.obsTimer.subscribe({
        next: time => this.t = time,
        complete: () => alert('complete')
      })
    );
    this.subscription.add(
      this.srv.obsTimer.subscribe({
        next: time => this.t = time,
        complete: () => alert('complete')
      })
    );
  }

  ngOnDestroy(): void {
    // יבטל את כל ההרשמות
    this.subscription.unsubscribe();
  }
}
