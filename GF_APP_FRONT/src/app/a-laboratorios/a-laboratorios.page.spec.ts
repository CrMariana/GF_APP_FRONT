import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ALaboratoriosPage } from './a-laboratorios.page';

describe('ALaboratoriosPage', () => {
  let component: ALaboratoriosPage;
  let fixture: ComponentFixture<ALaboratoriosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ALaboratoriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
