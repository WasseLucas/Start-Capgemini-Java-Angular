import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplosServico1Component } from './exemplos-servico1.component';

describe('ExemplosServico1Component', () => {
  let component: ExemplosServico1Component;
  let fixture: ComponentFixture<ExemplosServico1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplosServico1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemplosServico1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
