import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';

import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterSalarieModalComponent } from './register-salarie-modal.component';
import { UsersService } from 'src/app/services/users.service';

describe('RegisterSalarieModalComponent', () => {
  let component: RegisterSalarieModalComponent;
  let fixture: ComponentFixture<RegisterSalarieModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterSalarieModalComponent], providers: [UsersService, DataService, { provide: ActivatedRoute, useValue: {} }, { provide: HttpClient, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatSnackBar, useValue: {} }, { provide: FormBuilder, useValue: {} }, { provide: MatDialog, useValue: {} }, { provide: MatDialogRef, useValue: {} }, { provide: MatFormField, useValue: {} }, { provide: MatIcon, useValue: {} }, { provide: MatLabel, useValue: {} }]
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
