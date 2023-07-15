import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplosServico2Component } from './exemplos-servico2.component';

describe('ExemplosServico2Component', () => {
  let component: ExemplosServico2Component;
  let fixture: ComponentFixture<ExemplosServico2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplosServico2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemplosServico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
