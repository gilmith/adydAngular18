import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiduriaComponent } from './sabiduria.component';

describe('SabiduriaComponent', () => {
  let component: SabiduriaComponent;
  let fixture: ComponentFixture<SabiduriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SabiduriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabiduriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
