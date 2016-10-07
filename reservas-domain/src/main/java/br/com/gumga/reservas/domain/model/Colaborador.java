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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Colaborador")
//@Indexed
@Audited
@Entity
public class Colaborador extends GumgaModel<Long> {

    @Version
    private Integer version;
	private String nome;
	private Integer matricula;
        private String email;

	public Colaborador() {
	}

	public String getNome() {
		return this.nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getMatricula() {
		return this.matricula;
	}
	public void setMatricula(Integer matricula) {
		this.matricula = matricula;
	}

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
        
        
        
}