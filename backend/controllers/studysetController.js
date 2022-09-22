const studySet = require('../models/studysets');
const mongoose = require('mongoose')

// get all study sets
const getStudysets = async (req, res) => {
    const studyset = await studySet.find({}).sort({createdAt: -1})

    res.status(200).json(studyset)
}

// get a single study set
const getStudyset = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such studyset'})
    }

    const studyset = await studySet.findById(id)

    if (!studyset) {
        return res.status(404).json({error: 'No such studyset'})
    }

    res.status(200).json(studyset)
}

// create a new study set
const createStudyset = async (req, res) => {
    const {title, cards, desc} = req.body

    // add doc to db
    try {
        const studyset = await studySet.create({title, cards, desc})
        res.status(200).json(studyset)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a study set
const deleteStudyset = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such studyset'})
    }

    const studyset = await studySet.findOneAndDelete({_id: id}) //returns response of document deleted
    if (!studyset) {
        return res.status(404).json({error: 'No such studyset'})
    }

    res.status(200).json(studyset)
}

// update a study set
const updateStudyset = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such studyset'})
    }

    const studyset = await studySet.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!studyset) {
        return res.status(404).json({error: 'No such studyset'})
    }

    res.status(200).json(studyset)
}


module.exports = {
    getStudyset,
    getStudysets,
    createStudyset,
    deleteStudyset,
    updateStudyset
}