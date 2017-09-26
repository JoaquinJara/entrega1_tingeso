package com.example.entrega1_tingeso.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "student")
public class Student {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long studentId;
	
	private String name;
	
	private String email;
	
    private String career;
	
	private long entry;
	
	private String rut;
	
	public long getStudentId(){
		return studentId;
	}
	
	public void setStudentId(long studentId){
		this.studentId = studentId;
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
	
	public String getCareer(){
		return career;
	}
	
	public void serCareer (String career){
		this.career = career;
	}
	
	public long getEntry(){
		return entry;
	}
	
	public void setEntry(long entry){
		this.entry = entry;
	}
	
	public String getRut(){
		return rut;
	}
	
	public void setRut(String rut){
		this.rut = rut;
	}
	
	
	public Student() {
	}
}