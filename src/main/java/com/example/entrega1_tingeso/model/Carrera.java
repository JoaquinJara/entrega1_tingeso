package com.example.entrega1_tingeso.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "carreras")
public class Carrera {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long carreraId;
	
	@OneToMany(mappedBy = "carrera")
    private String name;
	
	public long getCarreraId(){
		return carreraId;
	}
	
	public void setCarreraId(long carreraId){
		this.carreraId = carreraId;
	}
	
	public String getName(){
		return name;
	}
	
	public void setName(String name){
		this.name = name;
	}
	
	public Carrera(){
	}
}