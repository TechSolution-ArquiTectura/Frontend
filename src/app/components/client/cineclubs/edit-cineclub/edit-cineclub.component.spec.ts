import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCineclubComponent } from './edit-cineclub.component';

describe('EditCineclubComponent', () => {
  let component: EditCineclubComponent;
  let fixture: ComponentFixture<EditCineclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCineclubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCineclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
