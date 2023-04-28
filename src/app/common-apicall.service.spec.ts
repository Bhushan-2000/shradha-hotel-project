import { TestBed } from '@angular/core/testing';

import { CommonApicallService } from './common-apicall.service';

describe('CommonApicallService', () => {
  let service: CommonApicallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonApicallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
