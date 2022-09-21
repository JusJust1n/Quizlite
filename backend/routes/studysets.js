const express = require('express');
const studySet = require('../models/studysets');

const router = express.Router();


// GET all studysets
router.get('/', (req, res) => {
    res.json({mssg: 'GET all studysets'})
})

// GET single studyset
//:id is the thing you want ot get
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single studyset'})
})

// POST a new studyset
router.post('/', async (req, res) => {
    const {title, cards, desc} = req.body

    try {
        const studyset = await studySet.create({title, cards, desc})
        res.status(200).json(studyset)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    //res.json({mssg: 'POST new studyset'})
})

// Delete studyset
//:id is the thing you want to delete
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE studyset'})
})

// UPDATE a studyset
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a studyset'})
})

module.exports = router