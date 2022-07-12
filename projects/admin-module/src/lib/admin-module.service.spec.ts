import { TestBed } from '@angular/core/testing';

import { AdminModuleService } from './admin-module.service';

describe('AdminModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminModuleService = TestBed.get(AdminModuleService);
    expect(service).toBeTruthy();
  });
});
