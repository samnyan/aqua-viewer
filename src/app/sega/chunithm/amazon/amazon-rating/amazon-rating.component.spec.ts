import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AmazonRatingComponent} from './amazon-rating.component';

describe('AmazonRatingComponent', () => {
  let component: AmazonRatingComponent;
  let fixture: ComponentFixture<AmazonRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmazonRatingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
