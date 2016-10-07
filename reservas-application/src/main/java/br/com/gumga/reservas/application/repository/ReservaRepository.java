package br.com.gumga.reservas.application.repository;

import gumga.framework.domain.repository.GumgaCrudRepository;
import br.com.gumga.reservas.domain.model.Reserva;

public interface ReservaRepository extends GumgaCrudRepository<Reserva, Long> {
}