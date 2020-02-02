import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivaPvlistComponent } from './diva-pvlist.component';

describe('DivaPvlistComponent', () => {
  let component: DivaPvlistComponent;
  let fixture: ComponentFixture<DivaPvlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivaPvlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivaPvlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
