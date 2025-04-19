import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlineamientoComponent } from './alineamiento.component';

describe('AlineamientoComponent', () => {
  let component: AlineamientoComponent;
  let fixture: ComponentFixture<AlineamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlineamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlineamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
