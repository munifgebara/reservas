package br.com.gumga.reservas.domain.model;

public enum TipoRecurso {

	AR_CONDICIONADO("Ar Condicionado"),
	PROJETOR("Projetor"),
	NOTEBOOK("Notebook");
   
    private final String description; 
    
    TipoRecurso(String description) { 
       this.description = description; 
    } 
    
    public String getDescription() {    
        return description; 
    } 
    
    public String toString() {
        return description; 
    }
}