package com.ecommerce.spring.app.service;

import com.ecommerce.spring.app.model.Usuario;
import com.ecommerce.spring.app.repository.UsuarioRepository;

import java.util.List;
import java.time.LocalDateTime;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario registrar(Usuario usuario) {
        usuario.setFechaRegistro(LocalDateTime.now());
        usuario.setEstado("No Verificado");
        return usuarioRepository.save(usuario);
    }

    public Optional<Usuario> login(String email, String contrasena) {
        return usuarioRepository.findByEmail(email)
            .filter(u -> u.getContrasena().equals(contrasena));
    }
}

