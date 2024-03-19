import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersHomeListComponent } from './players-home-list.component';

describe('PlayersHomeListComponent', () => {
  let component: PlayersHomeListComponent;
  let fixture: ComponentFixture<PlayersHomeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersHomeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayersHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
