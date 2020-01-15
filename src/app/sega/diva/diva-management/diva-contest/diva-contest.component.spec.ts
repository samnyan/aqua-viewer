import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DivaContestComponent} from './diva-contest.component';

describe('DivaContestComponent', () => {
  let component: DivaContestComponent;
  let fixture: ComponentFixture<DivaContestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DivaContestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivaContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
