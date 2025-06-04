package com.ecomerce.spring.app.controllers;

import com.ecomerce.spring.app.model.CarritoProducto;
import com.ecomerce.spring.app.repository.CarritoProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/carrito_productos")
@CrossOrigin(origins = "http://localhost:3000")
public class CarritoProductController {

    @Autowired
    private CarritoProductoRepository carritoProductoRepository;

    // Obtener todos los CarritoProducto
    @GetMapping
    public List<CarritoProducto> getAllCarritoProductos() {
        return carritoProductoRepository.findAll();
    }

    // Actualizar la cantidad de un CarritoProducto por id
    @PutMapping("/{id}")
    public ResponseEntity<CarritoProducto> actualizarCantidad(
            @PathVariable("id") int id,
            @RequestParam("cantidad") int cantidad) {

        Optional<CarritoProducto> optCarritoProducto = carritoProductoRepository.findById(id);
        if (optCarritoProducto.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        CarritoProducto carritoProducto = optCarritoProducto.get();
        carritoProducto.setCantidad(cantidad);
        carritoProductoRepository.save(carritoProducto);

        return ResponseEntity.ok(carritoProducto);
    }
}
