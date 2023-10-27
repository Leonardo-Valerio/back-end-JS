const express = require('express')
const app = express()
const db = require('./bd')
const dbcontext = db.AlunosDatabase()


app.use(express.json())



// pegar todos os alunos get
app.get('/alunos', async (req,res) =>{
    
    console.log('entrou no alunos')
    res.status(200).send(await dbcontext.list())
})

// pegar um unico aluno get by params
app.get('/alunos/:id', async (req,res) =>{
    console.log(req.params.id)
    res.status(200).send(await dbcontext.get(req.params.id))
})

//post
app.post('/alunos', async (req,res) =>{
    console.log(req.body)
    console.log('enviou alunos')
    res.status(200).send(await dbcontext.insert(req.body))
})

// put
app.put('/alunos/:id', async (req,res) =>{
    console.log(req.params.id)
    res.status(200).send(await dbcontext.update(req.body, req.params.id))
})

// delete
app.delete('/alunos/:id/', async (req,res) =>{
    console.log(req.params.id)
    await dbcontext.del(req.params.id)
    res.status(200).send('aluno excluido')
})
app.listen(3005, () => {
    console.log('iniciei meu servidor')
    console.log(dbcontext.alunos)
})