import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsCursosComponent } from './buttons-cursos.component';

describe('ButtonsCursosComponent', () => {
  let component: ButtonsCursosComponent;
  let fixture: ComponentFixture<ButtonsCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsCursosComponent]
    });
    fixture = TestBed.createComponent(ButtonsCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
