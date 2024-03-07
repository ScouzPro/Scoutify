import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackDataComponent } from './stack-data.component';

describe('StackDataComponent', () => {
  let component: StackDataComponent;
  let fixture: ComponentFixture<StackDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StackDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
