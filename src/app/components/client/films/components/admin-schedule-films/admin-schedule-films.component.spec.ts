import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScheduleFilmsComponent } from './admin-schedule-films.component';

describe('AdminScheduleFilmsComponent', () => {
  let component: AdminScheduleFilmsComponent;
  let fixture: ComponentFixture<AdminScheduleFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminScheduleFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminScheduleFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
