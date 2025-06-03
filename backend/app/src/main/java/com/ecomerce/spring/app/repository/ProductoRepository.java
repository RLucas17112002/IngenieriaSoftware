package com.ecommerce.spring.app.repository;

import com.ecommerce.spring.app.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {
    List<Producto> findByActivoTrue();
}