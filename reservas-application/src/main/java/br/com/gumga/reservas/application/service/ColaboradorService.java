package br.com.gumga.reservas.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.gumga.reservas.application.repository.ColaboradorRepository;
import br.com.gumga.reservas.domain.model.Colaborador;


@Service
public class ColaboradorService extends GumgaService<Colaborador, Long> {

	private final ColaboradorRepository repository;

	@Autowired
	public ColaboradorService(ColaboradorRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
