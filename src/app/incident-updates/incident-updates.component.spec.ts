import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentUpdatesComponent } from './incident-updates.component';

describe('IncidentUpdatesComponent', () => {
  let component: IncidentUpdatesComponent;
  let fixture: ComponentFixture<IncidentUpdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentUpdatesComponent]
    });
    fixture = TestBed.createComponent(IncidentUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
