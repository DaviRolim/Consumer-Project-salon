/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinancaService } from './financa.service';

describe('FinancaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinancaService]
    });
  });

  it('should ...', inject([FinancaService], (service: FinancaService) => {
    expect(service).toBeTruthy();
  }));
});
