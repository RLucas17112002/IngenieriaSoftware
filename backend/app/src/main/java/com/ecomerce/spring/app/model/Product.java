package com.ecomerce.spring.app.model;

public class Product {
    private Long id;
    private String nombre;
    private Double precio;
    private String distribuidor;
    private String descripcion;

    // Constructor
    public Product(Long id, String nombre, Double precio, String distribuidor, String descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.distribuidor = distribuidor;
        this.descripcion = descripcion;
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public Double getPrecio() { return precio; }
    public void setPrecio(Double precio) { this.precio = precio; }

    public String getDistribuidor() { return distribuidor; }
    public void setDistribuidor(String distribuidor) { this.distribuidor = distribuidor; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }
}
