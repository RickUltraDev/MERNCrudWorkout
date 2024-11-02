// Imports used

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
async function showAllWorkouts(req, res) {
    res.status(200).send({
        message: "Found all workouts",
        jsonArr: []
    });
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
async function showWorkout(req, res) {
    res.status(200).send({
        message: "Workout found"
    });
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
async function createWorkout(req, res) {
    res.status(200).send({
        message: "New workout created"
    });
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
async function deleteWorkout(req, res) {
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
async function updateWorkout(req, res) {
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