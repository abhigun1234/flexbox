import { TestBed } from '@angular/core/testing';

import { CourseinfoService } from './courseinfo.service';

describe('CourseinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseinfoService = TestBed.get(CourseinfoService);
    expect(service).toBeTruthy();
  });
});
