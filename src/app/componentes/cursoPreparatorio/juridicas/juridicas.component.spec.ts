import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuridicasComponent } from './juridicas.component';

describe('JuridicasComponent', () => {
  let component: JuridicasComponent;
  let fixture: ComponentFixture<JuridicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuridicasComponent]
    });
    fixture = TestBed.createComponent(JuridicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
