import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEntrepriseComponent } from './register-entreprise.component';

describe('RegisterEntrepriseComponent', () => {
  let component: RegisterEntrepriseComponent;
  let fixture: ComponentFixture<RegisterEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
