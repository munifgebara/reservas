package br.com.gumga.reservas.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.reservas.application.repository.RecursoRepository;
import br.com.gumga.reservas.domain.model.Recurso;


@Service
public class RecursoService extends GumgaService<Recurso, Long> {

	private final RecursoRepository repository;

	@Autowired
	public RecursoService(RecursoRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
