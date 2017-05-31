/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AtendimentoService } from './atendimento.service';

describe('AtendimentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtendimentoService]
    });
  });

  it('should ...', inject([AtendimentoService], (service: AtendimentoService) => {
    expect(service).toBeTruthy();
  }));
});
