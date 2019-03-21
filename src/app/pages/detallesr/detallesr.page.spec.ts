import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesrPage } from './detallesr.page';

describe('DetallesrPage', () => {
  let component: DetallesrPage;
  let fixture: ComponentFixture<DetallesrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
