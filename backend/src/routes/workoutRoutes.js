const express = require('express');
const router = express.Router();

// Controllers
const workoutController = require('../controllers/workoutController');

// Registered routes
router.get("/", workoutController.showAllWorkouts);
router.get("/:id", workoutController.showWorkout);
router.post("/", workoutController.createWorkout);
router.delete("/:id", workoutController.deleteWorkout);
router.patch("/:id", workoutController.updateWorkout);



module.exports = router;