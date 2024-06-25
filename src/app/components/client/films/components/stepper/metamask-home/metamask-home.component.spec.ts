import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetamaskHomeComponent } from './metamask-home.component';

describe('MetamaskHomeComponent', () => {
  let component: MetamaskHomeComponent;
  let fixture: ComponentFixture<MetamaskHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetamaskHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetamaskHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
