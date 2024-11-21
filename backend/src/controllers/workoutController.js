// Imports used
const workoutModel = require('../models/workoutModel');
const mongoose = require('mongoose');

/**
 * Shows all workouts.
 * This function handles an HTTP request and sends a response with a message sand an empty JSON array of workouts.
 *
 * @async
 * @function showAllWorkouts
 * @param {Object} req - The request object representing the HTTP request.
 * @param {Object} res - The response object representing the HTTP response.
 * @returns {Promise<void>} A promise that resolves when the response has been sent.
 */
const showAllWorkouts = async (req, res) => {
    try {
        const workouts = await workoutModel.find({}).sort({ createdAt: -1 });

        res.status(200).json({
            message: "Workouts saved",
            data: workouts
        });

    } catch (error) {
        res.status(400).send({
            message: "An error has ocurred",
            error: error.message
        });
    }
}

/**
 * Shows a workout by ID
 * This function handles an HTTP request and sends a response with a message.
 *
 * @async
 * @function showWorkout
 * @param {Object} req - The request object representing the HTTP request.
 * @param {Object} res - The response object representing the HTTP response.
 * @returns {Promise<void>} A promise that resolves when the response has been sent.
 */

const showWorkout = async (req, res) => {
    try {
        const { id } = req.params;

        //Check if the param Id is not valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                message: "Workout not found",
                data: ""
            });
        }

        const workout = await workoutModel.findById(id);

        //If workout by id is not found send a response
        if (!workout) {
            return res.status(404).json({
                message: "Workout not found",
                data: ""
            });
        }

        res.status(200).json({
            message: "Workout saved",
            data: workout
        });

    } catch (error) {
        res.status(400).send({
            message: "An error has ocurred",
            error: error.message
        });
    }
}


/**
 * Create a new workout
 * This function handles an HTTP request and sends a response with a message.
 *
 * @async
 * @function createWorkout
 * @param {Object} req - The request object representing the HTTP request.
 * @param {Object} res - The response object representing the HTTP response.
 * @returns {Promise<void>} A promise that resolves when the response has been sent.
 */
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;

    //Adding doc to db
    try {
        const workout = await workoutModel.create({ title, reps, load });
        res.status(200).send({
            message: "New workout created",
            data: workout
        });
    } catch (error) {
        res.status(400).send({
            message: "An error has ocurred",
            error: error.message
        });
    }

}


/**
 * Delete a current workout
 * This function handles an HTTP request and sends a response with a message.
 *
 * @async
 * @function deleteWorkout
 * @param {Object} req - The request object representing the HTTP request.
 * @param {Object} res - The response object representing the HTTP response.
 * @returns {Promise<void>} A promise that resolves when the response has been sent.
 */
const deleteWorkout = async (req, res) => {
    res.status(200).send({
        message: "Workout removed"
    });
}


/**
 * Update a workout
 * This function handles an HTTP request and sends a response with a message.
 *
 * @async
 * @function updateWorkout
 * @param {Object} req - The request object representing the HTTP request.
 * @param {Object} res - The response object representing the HTTP response.
 * @returns {Promise<void>} A promise that resolves when the response has been sent.
 */

const updateWorkout = async (req, res) => {
    res.status(201).send({
        message: "Workout updated"
    });
}




module.exports = {
    showAllWorkouts,
    showWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
};