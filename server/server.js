import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import colors from 'colors'
import prodcutRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'


dotenv.config()
connectDB()

const app = express()
app.use(express.json())

app.get('/', (req, res)=> {
  res.json('好了')
})

app.use('/api/products', prodcutRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `服务器在${PORT}端口号运行`
  )
)
