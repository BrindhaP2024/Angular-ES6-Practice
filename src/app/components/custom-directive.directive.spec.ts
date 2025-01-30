import { TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { CustomDirectiveDirective } from './custom-directive.directive';

describe('CustomDirectiveDirective', () => {
  let directive: CustomDirectiveDirective;
  let elementRef: ElementRef;

  beforeEach(() => {
    elementRef = new ElementRef(document.createElement('p'));

    TestBed.configureTestingModule({
      providers: [
        CustomDirectiveDirective,
        { provide: ElementRef, useValue: elementRef }
      ]
    });

    directive = TestBed.inject(CustomDirectiveDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
