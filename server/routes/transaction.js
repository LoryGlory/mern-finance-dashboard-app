import express from 'express';
import Transaction from '../models/Transaction.js';

const router = express.Router();

router.get('/transactions', async (req, res) => {
  // grab data from database and catch error
  try {
    const transactions = await Transaction.find().limit(50).sort({createdOn: -1}); // limit to 50 entries and sort by newest
    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
});


export default router;