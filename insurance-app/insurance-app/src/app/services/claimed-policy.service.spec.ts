import { TestBed } from '@angular/core/testing';

import { ClaimedPolicyService } from './claimed-policy.service';

describe('ClaimedPolicyService', () => {
  let service: ClaimedPolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimedPolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
