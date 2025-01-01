import { ComponentFixture, TestBed } from '@angular/core/testing';

import { REgisterComponent } from './register.component';

describe('REgisterComponent', () => {
  let component: REgisterComponent;
  let fixture: ComponentFixture<REgisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [REgisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(REgisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
