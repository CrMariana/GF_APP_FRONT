import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusquedadPlacaPage } from './busquedad-placa.page';

describe('BusquedadPlacaPage', () => {
  let component: BusquedadPlacaPage;
  let fixture: ComponentFixture<BusquedadPlacaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BusquedadPlacaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
