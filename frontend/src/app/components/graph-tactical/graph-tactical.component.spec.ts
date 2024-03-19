import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTacticalComponent } from './graph-tactical.component';

describe('GraphTacticalComponent', () => {
  let component: GraphTacticalComponent;
  let fixture: ComponentFixture<GraphTacticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphTacticalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphTacticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
