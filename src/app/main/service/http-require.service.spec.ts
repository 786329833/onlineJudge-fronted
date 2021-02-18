/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpRequireService } from './http-require.service';

describe('Service: HttpRequire', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequireService]
    });
  });

  it('should ...', inject([HttpRequireService], (service: HttpRequireService) => {
    expect(service).toBeTruthy();
  }));
});
