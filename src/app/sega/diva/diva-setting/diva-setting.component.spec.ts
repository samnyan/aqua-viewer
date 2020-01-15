import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DivaSettingComponent} from './diva-setting.component';

describe('DivaSettingComponent', () => {
  let component: DivaSettingComponent;
  let fixture: ComponentFixture<DivaSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DivaSettingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivaSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
