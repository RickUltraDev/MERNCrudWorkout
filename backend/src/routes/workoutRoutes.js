const express = require('express');
const router = express.Router();

// Controllers
const {
    showAllWorkouts,
    showWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController');

// Registered routes
router.get("/", showAllWorkouts);
router.get("/:id", showWorkout);
router.post("/", createWorkout);
router.delete("/:id", deleteWorkout);
router.patch("/:id", updateWorkout);



module.exports = router;