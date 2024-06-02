import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryObservableComponent } from './try-observable.component';

describe('TryObservableComponent', () => {
  let component: TryObservableComponent;
  let fixture: ComponentFixture<TryObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TryObservableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TryObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
