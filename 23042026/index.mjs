import express from 'express'
const PUERTO = 3000

const app = express() //instancia servidor express

const obtenerCosas = (resq, res)=>{
   res.set('content-type','text/html')
   res.status(200)
   res.end('<h1>h1 Hola Express>/h1>')
}

app.get('/', obtenerCosas)

app.post('/', (resq, res)=>{   //post
res.end ('estoy en verbo post y ruta /')
})

app.listen(PUERTO,()=>{

    console.log(`http://localhost:${PUERTO}`)
})

192168.0


////app.get('/', obtenerCosas)////

/////app.post('/', (resq, res)=>{//post
///.end ('estoy en verbo post y ruta /')////
////})


    
    
