// Import express async handler
const asyncHandler = require('express-async-handler')
// CRUD FUNCTIONS
//-------------------------------- READ
const getTareas = asyncHandler (async(req,res) => {
    res.status(200).json({message: 'Read tareas'})
});
//-------------------------------- CREATE
const postTareas = asyncHandler (async(req,res) => {
    if (!req.body.text) {
        //res.status(400).json({message: '400 Bad request, format empty'})
        res.status(400)
        throw new Error('Need valid format')
    }
    //console.log(req.body)
    res.status(200).json({message: 'Create tareas'})

});
//-------------------------------- UPDATE
const putTareas = asyncHandler (async(req,res) => {
    res.status(200).json({message: `Update tarea: ${req.params.id}`})
});
//-------------------------------- DELETE
const deleteTareas = asyncHandler (async(req,res) => {
    res.status(200).json({message: `Delete tareas: ${req.params.id}`})
});
// Export router route
module.exports = {
    getTareas,
    postTareas,
    putTareas,
    deleteTareas
}