import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSocietyComponent } from './edit-society.component';

describe('EditSocietyComponent', () => {
  let component: EditSocietyComponent;
  let fixture: ComponentFixture<EditSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSocietyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
