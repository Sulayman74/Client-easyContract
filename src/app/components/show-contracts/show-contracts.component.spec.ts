import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContractsComponent } from './show-contracts.component';

describe('ShowContractsComponent', () => {
  let component: ShowContractsComponent;
  let fixture: ComponentFixture<ShowContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowContractsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
