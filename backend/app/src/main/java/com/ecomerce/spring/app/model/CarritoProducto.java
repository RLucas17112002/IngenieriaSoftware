package com.ecomerce.spring.app.model;

import jakarta.persistence.*;

@Entity
@Table(name = "carritoproducto")
public class CarritoProducto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_carrito_producto;

    @ManyToOne
    @JoinColumn(name = "id_carrito", nullable = false)
    private Carrito carrito;

    @ManyToOne
    @JoinColumn(name = "id_producto", nullable = false)
    private Product producto;

    private int cantidad;

    // Getters y Setters

    public int getId_carrito_producto() {
        return id_carrito_producto;
    }

    public void setId_carrito_producto(int id_carrito_producto) {
        this.id_carrito_producto = id_carrito_producto;
    }

    public Carrito getCarrito() {
        return carrito;
    }

    public void setCarrito(Carrito carrito) {
        this.carrito = carrito;
    }

    public Product getProducto() {
        return producto;
    }

    public void setProducto(Product producto) {
        this.producto = producto;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
}

