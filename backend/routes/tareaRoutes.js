// Load express library
const express = require('express');
const router = express.Router(); // Needed to manage routes in express
const {getTareas, postTareas, putTareas, deleteTareas} = require('../controllers/tareaControllers');
const { protect } = require('../middleware/authMiddleware') // Import protect from authMiddleware where protect function is created

// ------------------------------------------------------------------------------
// METHOD #3
router.route('/').get(protect, getTareas).post(protect, postTareas)
router.route('/:id').delete(protect, deleteTareas).put(protect, putTareas)


/* METHOD #2
router.get('/', getTareas); //llamar al controlador y ejecutar la funcion getTareas
router.post('/', postTareas); //llamar al controlador y ejecutar la funcion postTareas
router.put('/:id', putTareas); //llamar al controlador y ejecutar la funcion putTareas
router.delete('/:id', deleteTareas); //llamar al controlador y ejecutar la funcion deleteTareas
/* 
/* METHOD #1
router.get('/', (req, res) => {
    //res.send('Obtener Tareas');
    //res.json({message: 'Obtener Tareas'})
    res.status(200).json({message: 'Obtener Tareas'})
}) 
router.post('/', (req, res) => {
    res.status(200).json({message: 'Crear una tarea'})
})
router.put('/:id', (req, res) => {
    res.status(200).json({message: `Modificar Tarea ${req.params.id}`})
})
router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Borrar la tarea ${req.params.id}`})
})
*/
module.exports = router;