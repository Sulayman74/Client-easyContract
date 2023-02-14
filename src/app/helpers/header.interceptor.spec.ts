import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder } from '@angular/forms';
import { HeaderInterceptor } from './header.interceptor';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestBed } from '@angular/core/testing';
import { UsersService } from '../services/users.service';

describe('HeaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HeaderInterceptor, UsersService, DataService, { provide: ActivatedRoute, useValue: {} }, { provide: HttpClient, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatSnackBar, useValue: {} }, { provide: FormBuilder, useValue: {} }, { provide: MatDialog, useValue: {} }, { provide: MatDialogRef, useValue: {} }
    ]

  }));

  it('should be created', () => {
    const interceptor: HeaderInterceptor = TestBed.inject(HeaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
