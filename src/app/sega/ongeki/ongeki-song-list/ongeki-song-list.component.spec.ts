import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OngekiSongListComponent} from './ongeki-song-list.component';

describe('OngekiSongListComponent', () => {
  let component: OngekiSongListComponent;
  let fixture: ComponentFixture<OngekiSongListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OngekiSongListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngekiSongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
