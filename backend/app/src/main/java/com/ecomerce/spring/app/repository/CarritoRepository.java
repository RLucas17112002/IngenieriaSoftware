package com.ecommerce.spring.app.repository;

import com.ecommerce.spring.app.model.Carrito;
import org.springframework.data.jpa.repository.JpaRepository;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;


public interface CarritoRepository extends JpaRepository<Carrito, Long> {}