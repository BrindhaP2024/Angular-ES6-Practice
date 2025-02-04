import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlStatusComponent } from './form-control-status.component';

describe('FormControlStatusComponent', () => {
  let component: FormControlStatusComponent;
  let fixture: ComponentFixture<FormControlStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
