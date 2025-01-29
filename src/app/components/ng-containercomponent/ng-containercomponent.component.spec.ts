import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainercomponentComponent } from './ng-containercomponent.component';

describe('NgContainercomponentComponent', () => {
  let component: NgContainercomponentComponent;
  let fixture: ComponentFixture<NgContainercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgContainercomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContainercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
