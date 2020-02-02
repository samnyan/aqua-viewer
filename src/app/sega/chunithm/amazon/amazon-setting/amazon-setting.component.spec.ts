import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonSettingComponent } from './amazon-setting.component';

describe('AmazonSettingComponent', () => {
  let component: AmazonSettingComponent;
  let fixture: ComponentFixture<AmazonSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazonSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
