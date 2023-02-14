import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { AuthGuardEntrepriseGuard } from './auth-guard-entreprise.guard';
import { DataService } from '../services/data.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestBed } from '@angular/core/testing';
import { UsersService } from '../services/users.service';

describe('AuthGuardEntrepriseGuard', () => {
  let guard: AuthGuardEntrepriseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UsersService, DataService, { provide: ActivatedRoute, useValue: {} }, { provide: HttpClient, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatSnackBar, useValue: {} }, { provide: FormBuilder, useValue: {} }, { provide: MatDialog, useValue: {} }] });
    guard = TestBed.inject(AuthGuardEntrepriseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
