import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarosolComponent } from './carosol.component';

describe('CarosolComponent', () => {
  let component: CarosolComponent;
  let fixture: ComponentFixture<CarosolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarosolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarosolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
