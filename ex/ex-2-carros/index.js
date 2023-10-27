const express = require('express')
const app = express()

app.use(express.json())

const cars = []

//GET
app.get('/carros', (req,res) => {
    console.log('aqui estão todos os carros cadastrados')
    res.status(200).send({'cars':cars})
})

//POST
app.post('/carros', (req,res)=>{
    let carro = req.body
    cars.push(carro)
    console.log(carro + 'enviado')
    res.status(200).send(carro)
})

//GET BY ID
app.get('/carros/:id',(req,res)=> {
    let carroId = req.params.id
    console.log(carroId)
    res.status(200).send(cars.find(x => x.id == carroId))
})

//PUT
app.put('/carros/:id',(req,res)=> {
    let carroId;
    for(let i = 0; i < cars.length; i++) {
        if (cars[i].id == req.params.id) {
            carroId = cars[i];
            break;
        }
    }
    
    console.log(carroId)
    console.log('---------------------------------')
    let id = cars.indexOf(carroId)
    console.log(id)
    cars[id] = req.body
    res.status(200).send(cars[id])
})

//DELETE
app.delete('/carros/:id',(req,res)=> {
    let carroId = cars.find(x => x.id == req.params.id)
    console.log(carroId)
    console.log('---------------------------------')
    let id = cars.indexOf(carroId)
    console.log(id)
    cars.splice(id,1)
    res.status(200).send(cars[id])
})

app.listen(3002,() =>{
    console.log('servidor iniciado')
})