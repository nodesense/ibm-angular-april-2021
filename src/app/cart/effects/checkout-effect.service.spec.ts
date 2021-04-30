import { TestBed } from '@angular/core/testing';

import { CheckoutEffectService } from './checkout-effect.service';

describe('CheckoutEffectService', () => {
  let service: CheckoutEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
