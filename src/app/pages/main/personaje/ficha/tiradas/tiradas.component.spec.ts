import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiradasComponent } from './tiradas.component';

describe('TiradasComponent', () => {
  let component: TiradasComponent;
  let fixture: ComponentFixture<TiradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiradasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
