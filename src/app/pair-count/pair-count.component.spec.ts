import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairCountComponent } from './pair-count.component';

describe('PairCountComponent', () => {
  let component: PairCountComponent;
  let fixture: ComponentFixture<PairCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
