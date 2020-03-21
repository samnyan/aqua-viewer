import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AmazonSongDetailComponent} from './amazon-song-detail.component';

describe('AmazonSongDetailComponent', () => {
  let component: AmazonSongDetailComponent;
  let fixture: ComponentFixture<AmazonSongDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmazonSongDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonSongDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
