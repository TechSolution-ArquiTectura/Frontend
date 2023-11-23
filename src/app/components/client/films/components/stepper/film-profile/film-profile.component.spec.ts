import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmProfileComponent } from './film-profile.component';

describe('FilmProfileComponent', () => {
  let component: FilmProfileComponent;
  let fixture: ComponentFixture<FilmProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
