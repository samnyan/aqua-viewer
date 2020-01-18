import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DivaModulesComponent} from './diva-modules.component';

describe('DivaModulesComponent', () => {
  let component: DivaModulesComponent;
  let fixture: ComponentFixture<DivaModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DivaModulesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivaModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
