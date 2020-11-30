import { TestBed } from '@angular/core/testing';

import { HomeuserService } from './homeuser.service';

describe('HomeuserService', () => {
  let service: HomeuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
