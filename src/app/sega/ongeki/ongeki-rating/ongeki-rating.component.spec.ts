import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OngekiRatingComponent} from './ongeki-rating.component';

describe('OngekiRatingComponent', () => {
  let component: OngekiRatingComponent;
  let fixture: ComponentFixture<OngekiRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OngekiRatingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngekiRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
