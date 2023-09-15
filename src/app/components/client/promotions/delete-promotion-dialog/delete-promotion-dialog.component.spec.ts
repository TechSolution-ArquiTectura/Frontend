import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePromotionDialogComponent } from './delete-promotion-dialog.component';

describe('DeletePromotionDialogComponent', () => {
  let component: DeletePromotionDialogComponent;
  let fixture: ComponentFixture<DeletePromotionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePromotionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePromotionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
