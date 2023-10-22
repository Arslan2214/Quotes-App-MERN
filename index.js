import express from 'express';
import dotenv from 'dotenv';
import { quoteRouter } from './routes/Quotes.js'
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// Middlewares
dotenv.config();
app.use(cors())
app.use(express.json())

// TODO: DB Connection
try {
    await mongoose.connect(process.env.MONGODB_LINK)      // Connecting db
    console.log('DB is Ready')
} catch (error) {
    console.log(error)
}


// * Routes ...
app.use('/api/quotes', quoteRouter)


app.listen(process.env.PORT, () => {        // Server LISTEN
    console.log(`Server is Live ... PORT: ${process.env.PORT}`)
})














// * Chapter 3 | Experss  | --👇🏼👇🏼👇🏼👇🏼--

// app.get('/', (req, res) => res.send('Hello, ARslan'))

// app.all('/api/method', (req, res) => {
//     // res.json(JSON_DATA)
//     res.send({ 'PATH': req.path, 'METHOD': req.method })
// })

// app.post('/body', (req, res) => {
//     console.log(req.body)
//     res.json(req.body)
// })

// app.post('/demo', (req, res) => {
//     res.send({ ...req.query })
// })
// app.get('/demo/:subject', (req, res) => {
//     res.send({ ...req.params })
// })