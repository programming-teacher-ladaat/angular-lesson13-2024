import { Component } from '@angular/core';
import { ObsErrComponent } from './components/obs-err/obs-err.component';
import { TryObservableComponent } from './components/try-observable/try-observable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TryObservableComponent, ObsErrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lesson13';
  isOK = true;
}
