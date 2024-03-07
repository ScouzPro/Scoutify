import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewPLayerComponent } from './modal-new-player.component';

describe('ModalNewPLayerComponent', () => {
  let component: ModalNewPLayerComponent;
  let fixture: ComponentFixture<ModalNewPLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNewPLayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalNewPLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
