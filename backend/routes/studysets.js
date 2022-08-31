const express = require('express');

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
router.post('/', (req, res) => {
    res.json({mssg: 'POST new studyset'})
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