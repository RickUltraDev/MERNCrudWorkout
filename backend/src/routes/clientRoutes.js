const express = require('express');
const router = express.Router();

// Controllers
const clientController = require('../controllers/clientController');

// Registered routes
router.get("/allclients", clientController.showAllClientsSaved);

// Example routes
// router.post("/client", clientController.saveClientData);
// router.get("/client/:idClient", clientController.showSingleClient);

module.exports = router;