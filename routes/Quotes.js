import { getAllQuotes, getQuoteById, createQuote, updateQuote, deleteQuote, replaceQuote } from '../controller/Quotes.js'
import express from 'express';


const quoteRouter = express.Router();


// TODO: RESTful API
// * Chapter 4 | RESTful Api |
quoteRouter.get('/', getAllQuotes)
    .get('/:id', getQuoteById)
    .post('/', createQuote)
    .put('/:id', replaceQuote)
    .patch('/:id', updateQuote)
    .delete('/:id', deleteQuote);

export { quoteRouter };