import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineclubDetailComponent } from './cineclub-detail.component';

describe('CineclubDetailComponent', () => {
  let component: CineclubDetailComponent;
  let fixture: ComponentFixture<CineclubDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CineclubDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CineclubDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
