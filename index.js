const express = require('express')
const cors = require('cors')
const app = express()
const logger = require('../middlewares/loggerMiddlewares')
const { getBooks, getBookId, deleteBook, postNewBook } = require('../routes/routesIndex.js')

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
getBookId(app)
getBooks(app)
deleteBook(app)
postNewBook(app)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})