// Load dotenv Library
const dotenv = require('dotenv').config();
// Error handler module
const {errorHandler} = require ('./middleware/errorMiddleware')
// Load express library
const express = require('express');
const port = process.env.PORT;

// Create express application
const app = express();
// Middleware to have JSON method access
app.use(express.json())
// Middleware to use body urlencode 
app.use(express.urlencoded({extended:false}))
// Import route from tareaRoutes.js
app.use('/api/tareas', require('./routes/tareaRoutes'))
// Use the error handler module from errorHandler
app.use(errorHandler)
// Express start listening on port defined
app.listen(port, ()=>console.log(`El servidor inició en el puerto ${port}`))
