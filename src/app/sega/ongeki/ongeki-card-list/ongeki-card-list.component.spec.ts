import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OngekiCardListComponent} from './ongeki-card-list.component';

describe('OngekiCardListComponent', () => {
  let component: OngekiCardListComponent;
  let fixture: ComponentFixture<OngekiCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OngekiCardListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngekiCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
