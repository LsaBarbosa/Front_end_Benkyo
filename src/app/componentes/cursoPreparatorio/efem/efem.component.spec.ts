import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfemComponent } from './efem';

describe('EfemComponent', () => {
  let component: EfemComponent;
  let fixture: ComponentFixture<EfemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EfemComponent],
    });
    fixture = TestBed.createComponent(EfemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
