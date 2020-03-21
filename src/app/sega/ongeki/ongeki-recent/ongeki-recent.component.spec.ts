import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OngekiRecentComponent} from './ongeki-recent.component';

describe('OngekiRecentComponent', () => {
  let component: OngekiRecentComponent;
  let fixture: ComponentFixture<OngekiRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OngekiRecentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngekiRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
