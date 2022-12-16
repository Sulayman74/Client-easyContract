import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewEntrepriseComponent } from './overview-entreprise.component';

describe('OverviewEntrepriseComponent', () => {
  let component: OverviewEntrepriseComponent;
  let fixture: ComponentFixture<OverviewEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewEntrepriseComponent ]
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
