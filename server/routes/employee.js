var express = require('express');
// Initialize the Router
var router = express.Router();

// Setup the Route
router.get('/:id', function (req, res) {
	var employee = require('../data/employee_' + req.params.id + '.json');

    // return a json response to angular
    res.json(employee);
});

// Expose the module
module.exports = router;