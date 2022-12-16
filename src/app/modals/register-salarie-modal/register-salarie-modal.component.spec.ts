import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSalarieModalComponent } from './register-salarie-modal.component';

describe('RegisterSalarieModalComponent', () => {
  let component: RegisterSalarieModalComponent;
  let fixture: ComponentFixture<RegisterSalarieModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSalarieModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSalarieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
