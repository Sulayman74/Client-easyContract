import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfilSalarieResolver } from './profil-salarie.resolver';
import { TestBed } from '@angular/core/testing';
import { UsersService } from '../services/users.service';

describe('ProfilSalarieResolver', () => {
  let resolver: ProfilSalarieResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UsersService, DataService, { provide: ActivatedRoute, useValue: {} }, { provide: HttpClient, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatSnackBar, useValue: {} }, { provide: FormBuilder, useValue: {} }, { provide: MatDialog, useValue: {} }, { provide: MatDialogRef, useValue: {} }] });
    resolver = TestBed.inject(ProfilSalarieResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
