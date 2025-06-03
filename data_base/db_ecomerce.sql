CREATE DATABASE IF NOT EXISTS ecommerce;
USE ecommerce;

-- Usuario
CREATE TABLE Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    estado ENUM('No Verificado', 'Activo', 'Suspendido') DEFAULT 'No Verificado',
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Dirección de Envío
CREATE TABLE DireccionEnvio (
    id_direccion INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    direccion TEXT NOT NULL,
    ciudad VARCHAR(50),
    estado VARCHAR(50),
    codigo_postal VARCHAR(10),
    pais VARCHAR(50),
    direccion_favorita BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario) ON DELETE CASCADE
);

-- Producto
CREATE TABLE Producto (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    marca VARCHAR(50),
    tamanio VARCHAR(50),
    color VARCHAR(30),
    imagen_url TEXT,
    categoria VARCHAR(50),
    activo BOOLEAN DEFAULT TRUE
);

-- Promoción
CREATE TABLE Promocion (
    id_promocion INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT,
    descripcion VARCHAR(255),
    porcentaje_descuento DECIMAL(5,2),
    fecha_inicio DATE,
    fecha_fin DATE,
    FOREIGN KEY (id_producto) REFERENCES Producto(id_producto) ON DELETE CASCADE
);

-- Carrito
CREATE TABLE Carrito (
    id_carrito INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario) ON DELETE CASCADE
);

CREATE TABLE CarritoProducto (
    id_carrito_producto INT AUTO_INCREMENT PRIMARY KEY,
    id_carrito INT,
    id_producto INT,
    cantidad INT DEFAULT 1,
    FOREIGN KEY (id_carrito) REFERENCES Carrito(id_carrito) ON DELETE CASCADE,
    FOREIGN KEY (id_producto) REFERENCES Producto(id_producto) ON DELETE CASCADE
);

-- Pedido
CREATE TABLE Pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_direccion INT,
    estado ENUM('En proceso', 'Enviado', 'En camino', 'Recibido', 'Cancelado') DEFAULT 'En proceso',
    total DECIMAL(10,2) NOT NULL,
    fecha_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_direccion) REFERENCES DireccionEnvio(id_direccion)
);

-- Detalles de Pedido
CREATE TABLE DetallePedido (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_producto INT,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido) ON DELETE CASCADE,
    FOREIGN KEY (id_producto) REFERENCES Producto(id_producto)
);

-- Envío
CREATE TABLE Envio (
    id_envio INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    codigo_seguimiento VARCHAR(100),
    proveedor_envio VARCHAR(100),
    estado_actual VARCHAR(100),
    ultima_actualizacion DATETIME,
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido)
);

-- Pago
CREATE TABLE Pago (
    id_pago INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    metodo_pago ENUM('Tarjeta', 'Transferencia', 'PayPal'),
    estado_pago ENUM('Pendiente', 'Exitoso', 'Fallido') DEFAULT 'Pendiente',
    monto DECIMAL(10,2),
    fecha_pago DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido)
);

-- Reseña
CREATE TABLE Resena (
    id_resena INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_producto INT,
    puntuacion INT CHECK (puntuacion BETWEEN 1 AND 5),
    comentario TEXT,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_producto) REFERENCES Producto(id_producto)
);

-- Boletín Informativo
CREATE TABLE Boletin (
    id_boletin INT AUTO_INCREMENT PRIMARY KEY,
    emaio_suscriptor VARCHAR(100) NOT NULL UNIQUE,
    fecha_suscripcion DATETIME DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);