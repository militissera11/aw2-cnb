import express from 'express' 

const PUERTO = 3000
const app = express()

// Definir middleware
const validacionCodigo = async (req, res, next) => {
  try {
    const codigo = Number(req.params.codigo)

    // fetch a la API
    const respuesta = await fetch('http://localhost:4321/usuario')
    const usuario = await respuesta.json()

    if (usuario.codigo === codigo) {
      return next()
    }

    return res.status(400).json({ mensaje: 'El codigo es incorrecto' })

  } catch (error) {
    console.error('Error en validacionCodigo:', error)

    return res.status(500).json({
      mensaje: 'Error interno del servidor'
    })
  }
}

// Ruta
app.get('/:codigo', validacionCodigo, (req, res) => {    
  res.status(200).json({ mensaje: 'El codigo es correcto' })
})

app.listen(PUERTO, () => {
  console.log('http://localhost:3000')
})