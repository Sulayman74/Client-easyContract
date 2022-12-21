import { ProfilSalarieResolver } from './profil-salarie.resolver';
import { TestBed } from '@angular/core/testing';

describe('ProfilSalarieResolver', () => {
  let resolver: ProfilSalarieResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProfilSalarieResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
