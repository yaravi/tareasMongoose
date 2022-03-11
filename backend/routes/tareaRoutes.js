// Load express library
const express = require('express');
const router = express.Router(); // Needed to manage routes in express
const {getTareas, postTareas, putTareas, deleteTareas} = require('../controllers/tareaControllers');


// ------------------------------------------------------------------------------
// Create endpoint READ
//router.get('/', getTareas) // Import getTareas from controller
// Create endpoint CREATE
//router.post('/', postTareas)
// Code eficiency
router.route('/').get(getTareas).post(postTareas)
// Create endpoint UPDATE
//router.put('/:id', putTareas)
// Create endpoint DELETE
//router.delete('/:id', deleteTareas)
// Code efficiency
router.route('/:id').put(putTareas).delete(deleteTareas)
// Export router routes
module.exports = router;