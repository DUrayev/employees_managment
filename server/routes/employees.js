var express = require('express');
// Initialize the Router
var router = express.Router();

//Instead of DataBase for demonstrating
var employees = require('../data/employees.json');

// Setup the Route
router.get('/', function (req, res) {

    // return a json response to angular
    res.json(employees);
});

// Expose the module
module.exports = router;