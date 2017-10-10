import { TestBed, inject } from '@angular/core/testing';

import { ServicioMapaService } from './servicio-mapa.service';

describe('ServicioMapaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioMapaService]
    });
  });

  it('should be created', inject([ServicioMapaService], (service: ServicioMapaService) => {
    expect(service).toBeTruthy();
  }));
});
