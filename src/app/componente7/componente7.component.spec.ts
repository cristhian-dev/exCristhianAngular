import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente7Component } from './componente7.component';

describe('Componente7Component', () => {
  let component: Componente7Component;
  let fixture: ComponentFixture<Componente7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componente7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
