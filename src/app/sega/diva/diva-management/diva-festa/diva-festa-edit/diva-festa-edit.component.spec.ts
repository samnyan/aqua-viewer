import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DivaFestaEditComponent} from './diva-festa-edit.component';

describe('DivaFestaEditComponent', () => {
  let component: DivaFestaEditComponent;
  let fixture: ComponentFixture<DivaFestaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DivaFestaEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivaFestaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
