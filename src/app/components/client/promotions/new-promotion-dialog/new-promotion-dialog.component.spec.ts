import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPromotionDialogComponent } from './new-promotion-dialog.component';

describe('NewPromotionDialogComponent', () => {
  let component: NewPromotionDialogComponent;
  let fixture: ComponentFixture<NewPromotionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPromotionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPromotionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
