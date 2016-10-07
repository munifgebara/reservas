package br.com.gumga.reservas.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.reservas.application.repository.ReservaRepository;
import br.com.gumga.reservas.domain.model.Reserva;

import br.com.gumga.reservas.domain.model.Recurso;

@Service
public class ReservaService extends GumgaService<Reserva, Long> {

	private final ReservaRepository repository;

	@Autowired
	public ReservaService(ReservaRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
	@Transactional
	public Reserva loadReservaFat(Long id) {
		Reserva obj = repository.findOne(id);	
		
		Hibernate.initialize(obj.getRecurso());
		Hibernate.initialize(obj.getRecurso());
		Hibernate.initialize(obj.getRecurso());
		
		
		return obj;
	}
}
