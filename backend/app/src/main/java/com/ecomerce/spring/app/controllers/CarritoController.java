package com.ecomerce.spring.app.controllers;

import com.ecomerce.spring.app.model.Carrito;
import com.ecomerce.spring.app.repository.CarritoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;

@RestController
@RequestMapping("/api/carrito")
@CrossOrigin(origins = "http://localhost:3000")
public class CarritoController {

    @Autowired
    private CarritoRepository carritoRepository;

    @GetMapping
    public List<Carrito> getCarritos() {
        return carritoRepository.findAll();
    }

    @PostMapping
    public Carrito agregarCarrito(@RequestBody Carrito carrito) {
        return carritoRepository.save(carrito);
    }
}