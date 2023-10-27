const express = require('express')
const app = express()

app.use(express.json())

const users = []

// pegar todos os alunos get
app.get('/alunos', (req,res) =>{
    
    console.log('entrou no alunos')
    res.status(200).send({"user": users})
})

// pegar um unico aluno get by params
app.get('/alunos/:id', (req,res) =>{
    console.log(req.params.id)
    let aluno = req.params.id
    res.status(200).send(users.find(x => x.id == aluno))
})

//post
app.post('/alunos', (req,res) =>{
    console.log(req.body)
    let aluno = req.body
    users.push(aluno)
    console.log('enviou alunos')
    res.status(200).send(aluno)
})

// put
app.put('/alunos/:id', (req,res) =>{
    console.log(req.params.id)
    let aluno = users.find(x => x.id == req.params.id)
    let alundoId = users.indexOf(aluno)
    users[alundoId] = req.body
    
    res.status(200).send(users[alundoId])
})

// delete
app.delete('/alunos/:id/',(req,res) =>{
    console.log(req.params.id)
    let aluno = users.find(x => x.id == req.params.id)
    console.log(aluno)
    let alunoId = users.indexOf(aluno)
    console.log('----------')
    console.log(alunoId)
     users.splice(alunoId,1)
    res.status(200).send('aluno excluido')
})
app.listen(3000, () => {
    console.log('iniciei meu servidor')
})