import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsGraphicsComponent } from './metrics-graphics.component';

describe('MetricsGraphicsComponent', () => {
  let component: MetricsGraphicsComponent;
  let fixture: ComponentFixture<MetricsGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricsGraphicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetricsGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
