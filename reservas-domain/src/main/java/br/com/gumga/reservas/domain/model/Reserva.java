package br.com.gumga.reservas.domain.model;
import gumga.framework.domain.GumgaModel; //TODO RETIRAR OS IMPORTS DESNECESS?RIOS
import gumga.framework.domain.GumgaMultitenancy;
import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import javax.validation.constraints.*;
import gumga.framework.domain.domains.*;
import org.hibernate.annotations.Columns;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Reserva")
//@Indexed
@Audited
@Entity
public class Reserva extends GumgaModel<Long> {

    @Version
    private Integer version;
	private Date dataInicio;
	private GumgaMultiLineString descricao;
	@ManyToOne
	private Sala sala;
	private String evento;
	@ManyToMany
	private Set<Recurso> recurso;
	private Date dataFim;
	@ManyToOne
	private Colaborador colaborador;

	public Reserva() {
	}

	public Date getDataInicio() {
		return this.dataInicio;
	}
	public void setDataInicio(Date dataInicio) {
		this.dataInicio = dataInicio;
	}

	public GumgaMultiLineString getDescricao() {
		return this.descricao;
	}
	public void setDescricao(GumgaMultiLineString descricao) {
		this.descricao = descricao;
	}

	public Sala getSala() {
		return this.sala;
	}
	public void setSala(Sala sala) {
		this.sala = sala;
	}

	public String getEvento() {
		return this.evento;
	}
	public void setEvento(String evento) {
		this.evento = evento;
	}

	public Set<Recurso> getRecurso() {
		return this.recurso;
	}
	public void setRecurso(Set<Recurso> recurso) {
		this.recurso = recurso;
	}

	public Date getDataFim() {
		return this.dataFim;
	}
	public void setDataFim(Date dataFim) {
		this.dataFim = dataFim;
	}

	public Colaborador getColaborador() {
		return this.colaborador;
	}
	public void setColaborador(Colaborador colaborador) {
		this.colaborador = colaborador;
	}
}