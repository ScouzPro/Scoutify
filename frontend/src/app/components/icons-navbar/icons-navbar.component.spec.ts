import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsNavbarComponent } from './icons-navbar.component';

describe('IconsNavbarComponent', () => {
  let component: IconsNavbarComponent;
  let fixture: ComponentFixture<IconsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
