import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdfExampleComponent } from './rdf-example.component';

describe('RdfExampleComponent', () => {
  let component: RdfExampleComponent;
  let fixture: ComponentFixture<RdfExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RdfExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdfExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
