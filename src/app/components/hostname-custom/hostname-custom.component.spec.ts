import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostnameCustomComponent } from './hostname-custom.component';

describe('HostnameCustomComponent', () => {
  let component: HostnameCustomComponent;
  let fixture: ComponentFixture<HostnameCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostnameCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostnameCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
