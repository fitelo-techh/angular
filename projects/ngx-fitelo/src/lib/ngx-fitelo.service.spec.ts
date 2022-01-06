import { TestBed } from '@angular/core/testing';

import { NgxFiteloService } from './ngx-fitelo.service';

describe('NgxFiteloService', () => {
  let service: NgxFiteloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFiteloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
