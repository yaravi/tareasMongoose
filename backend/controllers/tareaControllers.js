// Import express async handler
const asyncHandler = require('express-async-handler')
// Import DB schema into controller
const Tarea = require ('../models/tareaModel')
// CRUD FUNCTIONS
//-------------------------------- READ
const getTareas = asyncHandler (async(req,res) => {
    const tareas = await Tarea.find()
    res.status(200).json(tareas)
});
//-------------------------------- CREATE
const postTareas = asyncHandler (async(req,res) => {
    if (!req.body.text) {
        //res.status(400).json({message: '400 Bad request, format empty'})
        res.status(400)
        throw new Error('Need valid format')
    }
    const tarea = await Tarea.create({
        text: req.body.text
    })
    //console.log(req.body)
    res.status(200).json(tarea)

});
//-------------------------------- UPDATE
const putTareas = asyncHandler (async(req,res) => {
    const tarea = await Tarea.findById(req.params.id)
    // Set ID validation
    if (!tarea) {
        res.status(400)
        throw new Error ('Yo need to have a valid ID')
    }
    // If ID is valid then modify
    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(tareaUpdated)
});
//-------------------------------- DELETE
const deleteTareas = asyncHandler (async(req,res) => {
    const tarea = await Tarea.findById(req.params.id)
    // Set ID validation
    if (!tarea) {
        res.status(400)
        throw new Error ('Yo need to have a valid ID')
    }
    // If ID is valid then modify
    await tarea.remove()
    res.status(200).json({id: req.params.id})
});
// Export router route
module.exports = {
    getTareas,
    postTareas,
    putTareas,
    deleteTareas
}