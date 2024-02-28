import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarinhaComponent } from './marinha.component';

describe('MarinhaComponent', () => {
  let component: MarinhaComponent;
  let fixture: ComponentFixture<MarinhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarinhaComponent]
    });
    fixture = TestBed.createComponent(MarinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
