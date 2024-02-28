import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombeiroComponent } from './bombeiro.component';

describe('BombeiroComponent', () => {
  let component: BombeiroComponent;
  let fixture: ComponentFixture<BombeiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BombeiroComponent]
    });
    fixture = TestBed.createComponent(BombeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
