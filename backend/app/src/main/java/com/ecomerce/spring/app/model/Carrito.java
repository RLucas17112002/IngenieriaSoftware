package com.ecomerce.spring.app.model;

import java.time.LocalDateTime;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@Table(name = "Carrito")
public class Carrito {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_carrito;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    private LocalDateTime fecha_creacion;

    // Getters y Setters
    public int getId_carrito() {
        return id_carrito;
    }
    public void setId_carrito(int id_carrito) {
        this.id_carrito = id_carrito;
    }

    public Usuario getUsuario() {
        return usuario;
    }
    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public LocalDateTime getFecha_creacion() {
        return fecha_creacion;
    }
    public void setFecha_creacion(LocalDateTime fecha_creacion) {
        this.fecha_creacion = fecha_creacion;
    }
}