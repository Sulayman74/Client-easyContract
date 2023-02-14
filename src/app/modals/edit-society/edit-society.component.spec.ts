import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { EditSocietyComponent } from './edit-society.component';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';

describe('EditSocietyComponent', () => {
  let component: EditSocietyComponent;
  let fixture: ComponentFixture<EditSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSocietyComponent], providers: [UsersService, DataService, { provide: ActivatedRoute, useValue: {} }, { provide: HttpClient, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatSnackBar, useValue: {} }, { provide: FormBuilder, useValue: {} }, { provide: MatDialog, useValue: {} }, { provide: MatDialogRef, useValue: {} }]
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
