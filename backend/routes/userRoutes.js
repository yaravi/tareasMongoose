// Load express library
const express = require('express');
const router = express.Router(); // Needed to manage routes in express
// Import controllers
const {registerUser, loginUser, perfilUser} = require ('../controllers/userControllers');
// ------------------------------------------------------------------------------
// CREATE ROUTES
// REGISTER A USER
router.post('/', registerUser);
// LOGIN USER
router.post('/login', loginUser);
// PROFILE ROUTE
router.get('/perfil', perfilUser);
// ------------------------------------------------------------------------------
// EXPORT MODULES
module.exports = router;