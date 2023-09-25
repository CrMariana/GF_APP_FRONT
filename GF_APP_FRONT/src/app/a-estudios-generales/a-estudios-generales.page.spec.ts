import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AEstudiosGeneralesPage } from './a-estudios-generales.page';

describe('AEstudiosGeneralesPage', () => {
  let component: AEstudiosGeneralesPage;
  let fixture: ComponentFixture<AEstudiosGeneralesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AEstudiosGeneralesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
