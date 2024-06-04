import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptomusComponent } from './cryptomus.component';

describe('CryptomusComponent', () => {
  let component: CryptomusComponent;
  let fixture: ComponentFixture<CryptomusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptomusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CryptomusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
