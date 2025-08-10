const express = require('express');
const router = express.Router();
const Word = require('../models/Word');

router.post('/', async (req, res) => {
    const word = new Word(req.body); 
    await word.save(); 
    res.json(word); 
});

// Search words
router.get('/search', async (req, res) => {
    const { query } = req.query; 
    const result = await Word.find({
        word: { $regex: query, $options: 'i' } 
    });
    res.json(result); 
});

module.exports = router;
