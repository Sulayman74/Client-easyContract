import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfilSalarieComponent } from './profil-salarie.component';
import { UsersService } from 'src/app/services/users.service';

describe('ProfilSalarieComponent', () => {
  let component: ProfilSalarieComponent;
  let fixture: ComponentFixture<ProfilSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilSalarieComponent],
      providers: [UsersService, DataService, { provide: ActivatedRoute, useValue: {} }, { provide: HttpClient, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatSnackBar, useValue: {} }, { provide: FormBuilder, useValue: {} }, { provide: MatDialog, useValue: {} }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfilSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('UsersService', () => {
  let httpTestingController: HttpTestingController;
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have the getProfileWorker function', () => {
    expect(service.getProfileWorker).toBeTruthy();
  });

  it('should return an Observable<any>', () => {
    service.getProfileWorker().subscribe(response => {
      expect(response).toBeTruthy();
    });
    const req = httpTestingController.expectOne("https://backend-easy.onrender.com/api/users/profileWorker");
    expect(req.request.method).toEqual('GET');
    req.flush({});

  });

});
