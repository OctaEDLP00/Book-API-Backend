const express = require('express')
const cors = require('cors')
const app = express()
const logger = require('./middlewares/loggerMiddlewares.js')
const books = require('./books.js')

// middleware
app.use(express.json())
app.use(cors())
app.use(logger)
app.use((res, req) => {
  res.status(404).json({
    error: 'Not found'
  })
})

// routes
app.get('/', (req, res) => {
  res.send(`
    <h1 style="justify-content:center;align-items:center;flex:1;background-color:#fff;">
      BOOKS API
    </h1>
  `)
})

app.get('/api/books', (req, res) => {
  res.json(books)
})

app.get('/api/books/:id', (req, res) => {
  const id = Number(req.params.id)
  const book = books.find(book => book.id === String(id))

  if (book) {
    res.json(book)
  } else { 
    res.status(404).end()
  }
})

app.delete('/api/books/:id', (req, res) => {
  const id = Number(req.params.id)
  book.filter(book => book.id !== id)
  res.status(204).end()
})

app.post('api/books', (req, res) => { 
  const book = req.body

  if (!book || !book.title) {
    return res.status(400).json({
      error: 'Bad Request'
    })
  }

  const ids = books.map(book => book.id)
  const maxId = Math.max(...ids)

  const newBook = {
    id: maxId + 1,
    title: book.title,
    imageURL: book.imageURL,
    publish: book.publish,
    author: book.author,
    description: book.description
  }

  books = [...books, newBook]

  res.status(201).json(newBook)

})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})