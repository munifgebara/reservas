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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Recurso")
//@Indexed
@Audited
@Entity
public class Recurso extends GumgaModel<Long> {

    @Version
    private Integer version;
	private TipoRecurso tipo;
	private String codigo;
	private String descricao;

	public Recurso() {
	}

	public TipoRecurso getTipo() {
		return this.tipo;
	}
	public void setTipo(TipoRecurso tipo) {
		this.tipo = tipo;
	}

	public String getCodigo() {
		return this.codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getDescricao() {
		return this.descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
}