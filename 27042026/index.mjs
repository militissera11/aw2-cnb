import express from 'express'

const PUERTO = 3000
const app = express()

//middleware
function middleware1(req,res,next){
 console.log('se ejecuto el middleware1')
 if(true){
    res.send('terminando en middleware1')
 }else{
   next()
 }
 
}

app.use(middleware1)

app.get('/',(req,res)=>{
  console.log('peticion')
  res.send('Bienvenido')
})

app.get('/saludo',(req,res)=>{
  console.log('peticion')
  res.send('Bienvenido')
})


app.listen(PUERTO, () => {
  console.log(`http://localhost:${PUERTO}`)
})