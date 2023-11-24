import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimesTableComponent } from './showtimes-table.component';

describe('ShowtimesTableComponent', () => {
  let component: ShowtimesTableComponent;
  let fixture: ComponentFixture<ShowtimesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowtimesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowtimesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
