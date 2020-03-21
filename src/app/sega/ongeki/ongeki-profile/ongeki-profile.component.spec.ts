import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OngekiProfileComponent} from './ongeki-profile.component';

describe('OngekiProfileComponent', () => {
  let component: OngekiProfileComponent;
  let fixture: ComponentFixture<OngekiProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OngekiProfileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngekiProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
