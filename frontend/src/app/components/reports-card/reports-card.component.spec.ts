import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsCardComponent } from './reports-card.component';

describe('ReportsCardComponent', () => {
  let component: ReportsCardComponent;
  let fixture: ComponentFixture<ReportsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
