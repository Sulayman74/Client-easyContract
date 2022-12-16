import { TestBed } from '@angular/core/testing';

import { ProfilResolver } from './profil.resolver';

describe('ProfilResolver', () => {
  let resolver: ProfilResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProfilResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
