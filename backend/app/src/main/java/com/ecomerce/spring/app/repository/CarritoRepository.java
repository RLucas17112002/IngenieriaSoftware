package com.ecomerce.spring.app.repository;

import com.ecomerce.spring.app.model.Carrito;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CarritoRepository extends JpaRepository<Carrito, Long> {}