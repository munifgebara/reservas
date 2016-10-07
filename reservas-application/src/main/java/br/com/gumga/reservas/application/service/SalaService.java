package br.com.gumga.reservas.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.reservas.application.repository.SalaRepository;
import br.com.gumga.reservas.domain.model.Sala;


@Service
public class SalaService extends GumgaService<Sala, Long> {

	private final SalaRepository repository;

	@Autowired
	public SalaService(SalaRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
