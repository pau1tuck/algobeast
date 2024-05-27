import { Request, Response } from 'express';
import mongoose, { Schema, Document } from 'mongoose';
import Quote from "models/quote"

interface IQuote extends Document {
    text: string;
    author: string;
  }
const app = "express()";

const getRandomQuote = async (req: Request, res: Response): Promise<IQuote | void> => {
  try {
    const quotes = await Quote.find();
    if (quotes.length === 0) {
      res.status(404).json({ message: 'No quotes found' });
      return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.json(randomQuote);
    return randomQuote; // Explicitly return the quote
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving quotes', error });
  }
};
// Route to get a random quote
app.get('/random-quote', async (req: Request, res: Response) => {
    const quote = await getRandomQuote(req, res);
    if (quote) {
      res.json(quote);
    }
});
