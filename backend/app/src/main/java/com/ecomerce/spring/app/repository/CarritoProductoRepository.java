package com.ecomerce.spring.app.repository;

import com.ecomerce.spring.app.model.CarritoProducto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarritoProductoRepository extends JpaRepository<CarritoProducto, Integer> {
    // Aquí puedes agregar métodos personalizados si los necesitas
}
