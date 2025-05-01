import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestrezaComponent } from './destreza.component';

describe('DestrezaComponent', () => {
  let component: DestrezaComponent;
  let fixture: ComponentFixture<DestrezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestrezaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestrezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
