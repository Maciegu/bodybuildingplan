const express = require('express');
const router = express.Router();

const userActions = require('../actions/api/userActions');


// ENDPOINT DO POBIERANIA NOTATEK
router.get('/users', userActions.getAllusers);

//ENDPOINT DO POBIERANIA KONKRETNEJ NOTATKI
router.get('/users/:id', userActions.getUser);

//ZAPISYWANIE
router.post('/users', userActions.saveUser);

//EDYTOWANIE
router.put('/users/:id', userActions.updateUser);

//USUWANIE
router.delete('/users/:id', userActions.deleteUser);

module.exports  = router;