import express from 'express'
import {obtenerProductos} from './funciones.mjs'

const PUERTO = 3000

const app = express()

// Configurar un aAPI REST Basica

// Modulo productos
// GET /api/v1/productos
app.get('/api/v1/productos',obtenerProductos)

// GET /api/v1/productos/:id
// app.get('/api/v1/productos/:id',)

// POST /api/v1/productos
// app.post('/api/v1/productos',)

// PUT /api/v1/productos/:id
// app.put('/api/v1/productos/:id',)

// DELETE /api/v1/producto/:id
// app.delete('/api/v1/producto/:id',)


app.listen(PUERTO)