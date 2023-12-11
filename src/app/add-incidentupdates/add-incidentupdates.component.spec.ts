import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIncidentupdatesComponent } from './add-incidentupdates.component';

describe('AddIncidentupdatesComponent', () => {
  let component: AddIncidentupdatesComponent;
  let fixture: ComponentFixture<AddIncidentupdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIncidentupdatesComponent]
    });
    fixture = TestBed.createComponent(AddIncidentupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
