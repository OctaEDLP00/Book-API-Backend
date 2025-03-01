import express from 'express'
import cors from 'cors'
import logger from './middlewares/loggerMiddlewares.js'
import books from './books.js'

const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use(logger)

// routes
app.get('/', (req, res, next) => {
  res.send('<h1>BOOKS API</h1>')
})

app.get('/api/books', (req, res, next) => {
  res.json(books)
  
})

app.get('/api/books/:id', (req, res, next) => {
  const id = Number(req.params.id)
  const book = books.find(book => book.id === id)

  if (book) {
    res.json(book)
  } else { 
    res.status(404).end()
  }
})

app.delete('/api/books/:id', (req, res, next) => {
  const id = Number(req.params.id)
  book.filter(book => book.id !== id)
  res.status(204).end()
})

app.post('api/books', (req, res, next) => { 
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

app.use((req, res) => {
  res.status(404).json({
    error: 'Not found'
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})