import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShowtimeDialogComponent } from './new-showtime-dialog.component';

describe('NewShowtimeDialogComponent', () => {
  let component: NewShowtimeDialogComponent;
  let fixture: ComponentFixture<NewShowtimeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewShowtimeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewShowtimeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
