import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialPortalComponent } from './commercial-portal.component';

describe('CommercialPortalComponent', () => {
  let component: CommercialPortalComponent;
  let fixture: ComponentFixture<CommercialPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
