import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerIncidentsComponent } from './customer-incidents.component';

describe('CustomerIncidentsComponent', () => {
  let component: CustomerIncidentsComponent;
  let fixture: ComponentFixture<CustomerIncidentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerIncidentsComponent]
    });
    fixture = TestBed.createComponent(CustomerIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
