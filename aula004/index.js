const express = require('express')
const app = express()

app.get('/home', function (req, res) {
  const soma = 100 + 1;

  
  res.send(
    {dificuldade: 8,
     nível_da_aula: 1000,
     nível_do_professor: 1000,
     nota_geral: 2008
    })
})

app.listen(3000)