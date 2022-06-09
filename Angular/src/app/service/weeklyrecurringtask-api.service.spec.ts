import { TestBed } from '@angular/core/testing';

import { WeeklyrecurringtaskApiService } from './weeklyrecurringtask-api.service';

describe('WeeklyrecurringtaskApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeeklyrecurringtaskApiService = TestBed.get(WeeklyrecurringtaskApiService);
    expect(service).toBeTruthy();
  });
});
