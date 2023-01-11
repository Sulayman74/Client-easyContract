import { TestBed } from '@angular/core/testing';

import { AuthGuardEntrepriseGuard } from './auth-guard-entreprise.guard';

describe('AuthGuardEntrepriseGuard', () => {
  let guard: AuthGuardEntrepriseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuardEntrepriseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
