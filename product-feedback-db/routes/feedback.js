const express = require('express');
const mongoose = require('mongoose');
const Feedback = require('../models/feedback');
const router = express.Router();

// GET all feedback or get a single feedback by ID
router.get('/:id?', async (req, res) => {
    try {
        if (req.params.id) {
            const feedback = await Feedback.findById(req.params.id);

            if (!feedback) {
                return res.status(404).json({ msg: 'Feedback not found' });
            }

            res.status(200).json(feedback);
        } else {
            // If no ID is provided, fetch all feedback
            const feedback = await Feedback.find();
            res.json(feedback);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error', message: err.message });
    }
});

// POST a new feedback
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const feedback = await Feedback.create(data);
        res.json(feedback);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({error: 'Server Error'});
    }
});

module.exports = router;
