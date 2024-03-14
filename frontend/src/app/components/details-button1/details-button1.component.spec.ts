import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsButton1Component } from './details-button1.component';

describe('DetailsButton1Component', () => {
  let component: DetailsButton1Component;
  let fixture: ComponentFixture<DetailsButton1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsButton1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsButton1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
