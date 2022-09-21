const express = require('express');
//const studySet = require('../models/studysets');
const {
    createWorkout,
    
} = require('../controllers/studysetController')

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

/*
// POST a new studyset
router.post('/', async (req, res) => {
    

    //res.json({mssg: 'POST new studyset'})
})
*/
// POST a new studyset
router.post('/', createStudyset)

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