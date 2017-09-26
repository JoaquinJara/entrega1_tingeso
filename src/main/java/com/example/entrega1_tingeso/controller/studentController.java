package com.example.entrega1_tingeso.controller;

import com.example.entrega1_tingeso.model.Student;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface studentController extends CrudRepository<Student, Long> {
}