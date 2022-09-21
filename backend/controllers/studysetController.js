const studySet = require('../models/studysets');

// get all study sets
const getStudysets = async (req, res) => {
    const studyset = await Studyset.find({}).sort({createdAt: -1})

    res.status(200).json(studyset)
}

// get a single study set


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


// update a study set


module.exports = {
    createWorkout
}