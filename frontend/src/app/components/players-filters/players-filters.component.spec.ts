import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersFiltersComponent } from './players-filters.component';

describe('PlayersFiltersComponent', () => {
  let component: PlayersFiltersComponent;
  let fixture: ComponentFixture<PlayersFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayersFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
