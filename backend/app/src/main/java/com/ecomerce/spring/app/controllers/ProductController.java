package com.ecomerce.spring.app.controllers;

import com.ecomerce.spring.app.model.Product;
import com.ecomerce.spring.app.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductoRepository productoRepository;

    @GetMapping
    public List<Product> obtenerTodos() {
        return productoRepository.findByActivoTrue();
    }
}

/*
//Conexión local
package com.ecomerce.spring.app.controllers;

import java.util.List;
import com.ecomerce.spring.app.model.Product;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/productos")
public class HolaController {

    @GetMapping
    public List<Product> getAllProducts() {
        return List.of(
            new Product(1L, "Estambre Azul", 110.0, "Distribuidora Estambres MX", "Estambre suave para tejido grueso"),
            new Product(2L, "Estambre Rosa", 110.0, "Tejidos del Norte", "Ideal para proyectos delicados"),
            new Product(3L, "Estambre Multicolor", 135.5, "Estambres del Sur", "Colores combinados vibrantes"),
            new Product(3L, "Estambre Multicolor", 135.5, "Estambres del Sur", "Colores combinados vibrantes"),
            new Product(3L, "Estambre Multicolor", 135.5, "Estambres del Sur", "Colores combinados vibrantes"),
            new Product(3L, "Estambre Multicolor", 135.5, "Estambres del Sur", "Colores combinados vibrantes")
        );
    }
}
    */