import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectbasedDIComponent } from './injectbased-di.component';

describe('InjectbasedDIComponent', () => {
  let component: InjectbasedDIComponent;
  let fixture: ComponentFixture<InjectbasedDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectbasedDIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectbasedDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
