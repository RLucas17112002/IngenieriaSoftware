package com.ecomerce.spring.app.repository;

import com.ecomerce.spring.app.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface ProductoRepository extends JpaRepository<Product, Integer> {
    List<Product> findByActivoTrue();
}