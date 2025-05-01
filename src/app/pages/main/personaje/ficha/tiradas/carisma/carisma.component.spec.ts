import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarismaComponent } from './carisma.component';

describe('CarismaComponent', () => {
  let component: CarismaComponent;
  let fixture: ComponentFixture<CarismaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarismaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarismaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
