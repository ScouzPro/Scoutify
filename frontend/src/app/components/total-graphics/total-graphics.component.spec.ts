import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalGraphicsComponent } from './total-graphics.component';

describe('TotalGraphicsComponent', () => {
  let component: TotalGraphicsComponent;
  let fixture: ComponentFixture<TotalGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalGraphicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
