const express = require("express");
const router = express.Router();
const commitController = require("../controllers/commitController");

router.post("/generate", commitController.generateCommit);

module.exports = router;
