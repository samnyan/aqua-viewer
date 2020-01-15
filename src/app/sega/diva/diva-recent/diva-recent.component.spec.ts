import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DivaRecentComponent} from './diva-recent.component';

describe('DivaRecentComponent', () => {
  let component: DivaRecentComponent;
  let fixture: ComponentFixture<DivaRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DivaRecentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivaRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
