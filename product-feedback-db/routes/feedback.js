const express = require('express');
const Feedback = require('../models/feedback');
const router = express.Router();

//GET all feedback
router.get('/', async (req, res) => {
    try {
        const feedback = await Feedback.find();
        res.json(feedback);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/add-feedback', async (req, res) => {
    try {
        const data=req.body;
        console.log(data);
        const feedback = await Feedback.create(data);
        res.json(feedback);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;
