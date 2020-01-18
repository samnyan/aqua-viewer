import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DivaNewsComponent} from './diva-news.component';

describe('DivaNewsComponent', () => {
  let component: DivaNewsComponent;
  let fixture: ComponentFixture<DivaNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DivaNewsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
