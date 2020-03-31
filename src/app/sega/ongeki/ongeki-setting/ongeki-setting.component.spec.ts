import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OngekiSettingComponent} from './ongeki-setting.component';

describe('OngekiSettingComponent', () => {
  let component: OngekiSettingComponent;
  let fixture: ComponentFixture<OngekiSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OngekiSettingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngekiSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
