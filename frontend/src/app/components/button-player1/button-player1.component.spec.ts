import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPlayer1Component } from './button-player1.component';

describe('ButtonPlayer1Component', () => {
  let component: ButtonPlayer1Component;
  let fixture: ComponentFixture<ButtonPlayer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPlayer1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPlayer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
