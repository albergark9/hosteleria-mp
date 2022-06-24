import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevillanoComponent } from './sevillano.component';

describe('SevillanoComponent', () => {
  let component: SevillanoComponent;
  let fixture: ComponentFixture<SevillanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevillanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SevillanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
