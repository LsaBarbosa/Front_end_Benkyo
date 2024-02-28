import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnuComponent } from './cnu.component';

describe('CnuComponent', () => {
  let component: CnuComponent;
  let fixture: ComponentFixture<CnuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CnuComponent]
    });
    fixture = TestBed.createComponent(CnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
