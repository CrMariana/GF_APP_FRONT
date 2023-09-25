import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AFiaDataPage } from './a-fia-data.page';

describe('AFiaDataPage', () => {
  let component: AFiaDataPage;
  let fixture: ComponentFixture<AFiaDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AFiaDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
