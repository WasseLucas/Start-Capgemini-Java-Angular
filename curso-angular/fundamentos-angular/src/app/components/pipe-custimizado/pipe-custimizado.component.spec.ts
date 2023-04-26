import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCustimizadoComponent } from './pipe-custimizado.component';

describe('PipeCustimizadoComponent', () => {
  let component: PipeCustimizadoComponent;
  let fixture: ComponentFixture<PipeCustimizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeCustimizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeCustimizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
