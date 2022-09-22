const express = require('express');
//const studySet = require('../models/studysets');
const {
    createStudyset,
    getStudysets,
    getStudyset,
    deleteStudyset,
    updateStudyset
} = require('../controllers/studysetController')

const router = express.Router();


// GET all studysets
router.get('/', getStudysets)

// GET single studyset
//:id is the thing you want ot get
router.get('/:id', getStudyset)

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
router.delete('/:id', deleteStudyset)

// UPDATE a studyset
router.patch('/:id', updateStudyset)

module.exports = router