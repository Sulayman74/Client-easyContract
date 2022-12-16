import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewSalarieComponent } from './overview-salarie.component';

describe('OverviewSalarieComponent', () => {
  let component: OverviewSalarieComponent;
  let fixture: ComponentFixture<OverviewSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewSalarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
