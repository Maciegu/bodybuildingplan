const express = require('express');
const router = express.Router();

const noteActions = require('../actions/api/noteActions');

//TWORZYMY END POINTY
// PIERWSZY DO POBIERANIA NOTATEK
// 2 DO ZAPISYWANIA
//3 DO EDYTOWANIA
// 4 DO USUWANIA
// 
//GET DO POBRANIA JAKIS ZASOBÓW

// ENDPOINT DO POBIERANIA NOTATEK
router.get('/notes', noteActions.getAllNotes);

//ENDPOINT DO POBIERANIA KONKRETNEJ NOTATKI
router.get('/notes/:id', noteActions.getNote);

//ZAPISYWANIE
router.post('/notes', noteActions.saveNote);

//EDYTOWANIE
router.put('/notes/:id', noteActions.updateNote);

//USUWANIE
router.delete('/notes/:id', noteActions.deleteNote);

module.exports  = router;