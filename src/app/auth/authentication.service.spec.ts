/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {AuthenticationService} from './authentication.service';
import {HttpClientModule} from '@angular/common/http';

describe('Service: Authentication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthenticationService]
    });
  });

  it('should ...', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
