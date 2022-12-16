import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSalarieComponent } from './profil-salarie.component';

describe('ProfilSalarieComponent', () => {
  let component: ProfilSalarieComponent;
  let fixture: ComponentFixture<ProfilSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilSalarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
