import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercitoComponent } from './exercito.component';

describe('ExercitoComponent', () => {
  let component: ExercitoComponent;
  let fixture: ComponentFixture<ExercitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExercitoComponent]
    });
    fixture = TestBed.createComponent(ExercitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
