package com.ecomerce.spring.app.controllers;

import java.util.List;
import com.ecomerce.spring.app.model.Cart;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/cart")
public class CartController {

    @GetMapping
    public List<Cart> getAllCartProducts() {
        return List.of(
            new Cart(1L, "Estambre Azul", 120.0, 1),
            new Cart(2L, "Estambre Rosa", 110.0, 3),
            new Cart(3L, "Estambre Verde", 100.0, 4)
        );
    }
}