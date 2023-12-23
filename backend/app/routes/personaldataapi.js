const express = require('express');
const router = express.Router();

const personalDataActions = require('../actions/api/personalDataActions');

router.get('/personaldatas', personalDataActions.getAllPersonalDatas);


router.get('/personaldatas/:id', personalDataActions.getPersonalData);


router.post('/personaldatas', personalDataActions.savePersonalData);


router.put('/personaldatas/:id', personalDataActions.updatePersonalData);


router.delete('/personaldatas/:id', personalDataActions.deletePersonalData);

module.exports  = router;