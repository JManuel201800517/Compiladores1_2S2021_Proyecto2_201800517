import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionAdicionalComponent } from './opcion-adicional.component';

describe('OpcionAdicionalComponent', () => {
  let component: OpcionAdicionalComponent;
  let fixture: ComponentFixture<OpcionAdicionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionAdicionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionAdicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
