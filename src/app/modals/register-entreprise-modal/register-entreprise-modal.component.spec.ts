import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEntrepriseModalComponent } from './register-entreprise-modal.component';

describe('RegisterEntrepriseModalComponent', () => {
  let component: RegisterEntrepriseModalComponent;
  let fixture: ComponentFixture<RegisterEntrepriseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEntrepriseModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEntrepriseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
