import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AmazonRecentComponent} from './amazon-recent.component';

describe('AmazonRecentComponent', () => {
  let component: AmazonRecentComponent;
  let fixture: ComponentFixture<AmazonRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmazonRecentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
