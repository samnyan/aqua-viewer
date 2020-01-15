import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AmazonProfileComponent} from './amazon-profile.component';

describe('AmazonProfileComponent', () => {
  let component: AmazonProfileComponent;
  let fixture: ComponentFixture<AmazonProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmazonProfileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
