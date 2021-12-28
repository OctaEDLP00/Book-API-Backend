const express = require('express')
const app = express()
const { books } = require('../books.js')

// routes
const getBooks = app.get('/', (req, res) => {
  res.send(`
    <h1 style="justify-content:center;align-items:center;flex:1;background-color: #fff;">
      BOOKS API
    </h1>
  `)
})

const getBooks = app.get('/api/books', (req, res) => {
  res.json(books)
})

const getBookId = app.get('/api/books/:id', (req, res) => {
  const id = Number(req.params.id)
  const book = books.find(book => book.id === String(id))

  if (book) {
    res.json(book)
  } else { 
    res.status(404).end()
  }
})

const deleteBook = app.delete('/api/books/:id', (req, res) => {
  const id = Number(req.params.id)
  book.filter(book => book.id !== id)
  res.status(204).end()
})

const postNewBook = app.post('api/books', (req, res) => { 
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

module.exports = {
  getBooks,
  getBookId,
  deleteBook,
  postNewBook
}