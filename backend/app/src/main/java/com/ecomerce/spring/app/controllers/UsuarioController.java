package com.ecommerce.spring.app.controllers;


import com.ecommerce.spring.app.model.Usuario;
import com.ecommerce.spring.app.service.UsuarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:3000")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/registro")
    public ResponseEntity<Usuario> registrar(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioService.registrar(usuario));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> login) {
        String email = login.get("email");
        String contrasena = login.get("contrasena");
        return usuarioService.login(email, contrasena)
                .map(u -> ResponseEntity.ok("Inicio de sesión exitoso"))
                .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas"));
    }
}
