import express from 'express';

const app = express();
app.use(express.json())

const livros = [
  { id: 1, titulo: "Senhor dos aneis" },
  { id: 2, titulo: "Dunna" }
]

app.get('/', (req, res) => {
  res.status(200).send("Curso de Node")
})

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

app.post('/livros', (req, res) => {
  const livro = req.body
  livros.push(livro)
  res.status(201).json(livro)
})

app.put('/livros/:id', (req, res) => {
  const id = req.params
  const livro = req.body

  livros.push(livro)
  res.status(201).json(livro)
})

export default app