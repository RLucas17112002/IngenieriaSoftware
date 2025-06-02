const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Permitir peticiones desde tu frontend (React)
app.use(cors());

// Endpoint con datos
app.get('/api/datos', (req, res) => {
  res.json([
    {id: 1, nombre: 'Estambre Rojo', precio: 50, distribuidor: 'Serenity', descripcion: 'Estambre rojo de 1m de largo' },
    {id: 2, nombre: 'Estambre Verde', precio: 100, distribuidor: 'DIST1', descripcion: 'Estambre verde de 2m de largo' },
    {id: 3, nombre: 'Estambre Amarillo', precio: 150, distribuidor: 'DIST2', descripcion: 'Estambre amarillo de 1.5m de largo' },
    {id: 4, nombre: 'Estambre Azul', precio: 100, distribuidor: 'DIST3', descripcion: 'Estambre Azul de 1.5m de largo' },
    {id: 5, nombre: 'Estambre Negro', precio: 250, distribuidor: 'Serenity', descripcion: 'Estambre Negro de 2m de largo' },
    {id: 6, nombre: 'Estambre Blanco', precio: 50, distribuidor: 'DIST10', descripcion: 'Estambre Blanco de 1/2m de largo' }
  ]);
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
