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
            new Product(1L, "Estambre Azul", 120.0, "Distribuidora Estambres MX", "Estambre suave para tejido grueso"),
            new Product(2L, "Estambre Rosa", 110.0, "Tejidos del Norte", "Ideal para proyectos delicados"),
            new Product(3L, "Estambre Multicolor", 135.5, "Estambres del Sur", "Colores combinados vibrantes"),
            new Product(3L, "Estambre Multicolor", 135.5, "Estambres del Sur", "Colores combinados vibrantes"),
            new Product(3L, "Estambre Multicolor", 135.5, "Estambres del Sur", "Colores combinados vibrantes"),
            new Product(3L, "Estambre Multicolor", 135.5, "Estambres del Sur", "Colores combinados vibrantes")
        );
    }
}