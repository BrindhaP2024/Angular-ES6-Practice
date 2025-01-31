import { TestBed } from '@angular/core/testing';
import { UserService } from './user-service.service';  // Ensure this matches the class name in the service file

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);  // Make sure this matches the service class name
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
