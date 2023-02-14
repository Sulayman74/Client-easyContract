import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverviewEntrepriseComponent } from './overview-entreprise.component';
import { UsersService } from 'src/app/services/users.service';

describe('OverviewEntrepriseComponent', () => {
  let component: OverviewEntrepriseComponent;
  let fixture: ComponentFixture<OverviewEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewEntrepriseComponent],
      providers: [UsersService, DataService, { provide: ActivatedRoute, useValue: {} }, { provide: HttpClient, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatSnackBar, useValue: {} }, { provide: FormBuilder, useValue: {} }, { provide: MatDialog, useValue: {} }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OverviewEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
