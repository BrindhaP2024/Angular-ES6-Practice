import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsRxjsComponent } from './signals-rxjs.component';

describe('SignalsRxjsComponent', () => {
  let component: SignalsRxjsComponent;
  let fixture: ComponentFixture<SignalsRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
