import { Component, inject, OnInit } from '@angular/core';
import { TryObsService } from '../../services/try-obs.service';

@Component({
  selector: 'app-obs-err',
  standalone: true,
  imports: [],
  template: `@if(error){<p>{{error}}</p>}`,
  styles: 'p { color: red; }'
})
export class ObsErrComponent implements OnInit {
  srv = inject(TryObsService);
  error?: string;
  
  ngOnInit(): void {
    // 3. רישום לקבלת ההודעות
    this.srv.obs.subscribe({
      error: err => this.error = err
    });
  }  
}
