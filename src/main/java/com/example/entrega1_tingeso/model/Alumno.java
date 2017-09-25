package com.example.entrega1_tingeso.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "alumnos")
public class Alumno {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long alumnoId;
	
	private String name;
	
	private String email;
	
    private String carrera;
	
	private long ingreso;
	
	private String rut;
	
	public long getAlumnoId(){
		return alumnoId;
	}
	
	public void setAlumnoId(long alumnoId){
		this.alumnoId = alumnoId;
	}
	
	public String getName(){
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getEmail(){
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getCarrera(){
		return carrera;
	}
	
	public void serCarrera (String carrera){
		this.carrera = carrera;
	}
	
	public long getIngreso(){
		return ingreso;
	}
	
	public void setIngreso(long ingreso){
		this.ingreso = ingreso;
	}
	
	public String getRut(){
		return rut;
	}
	
	public void setRut(String rut){
		this.rut = rut;
	}
	
	
	public Alumno() {
	}
}