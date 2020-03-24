import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OngekiCardGachaComponent} from './ongeki-card-gacha.component';

describe('OngekiCardGachaComponent', () => {
  let component: OngekiCardGachaComponent;
  let fixture: ComponentFixture<OngekiCardGachaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OngekiCardGachaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngekiCardGachaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
